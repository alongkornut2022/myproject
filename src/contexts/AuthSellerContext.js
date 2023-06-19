import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../config/axiosSeller';
import {
  getAccessToken2,
  removeAccessToken2,
  setAccessToken2,
} from '../services/localStorage';

const AuthSellerContext = createContext();

function AuthSellerContextProvider({ children }) {
  const [seller, setSeller] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const tokenSeller = getAccessToken2();
        if (tokenSeller) {
          const resMe = await axios.get('/sellers/me');
          setSeller(resMe.data.seller);
        }
      } catch (err) {
        removeAccessToken2();
        navigate('/seller/login');
      }
    };

    fetchMe();
  }, []);

  const registerSeller = async (
    shopName,
    email,
    phoneNumber,
    password,
    confirmPassword
  ) => {
    const res = await axios.post(
      '/sellers/register',
      shopName,
      email,
      phoneNumber,
      password,
      confirmPassword
    );
    setAccessToken2(res.data.tokenSeller);
    const resMe = await axios.get('/sellers/me');
    setSeller(resMe.data.seller);
  };

  const loginSeller = async (emailOrPhoneNumber, password) => {
    const res = await axios.post('/sellers/login', {
      emailOrPhoneNumber,
      password,
    });
    setAccessToken2(res.data.tokenSeller);
    const resMe = await axios.get('/sellers/me');
    setSeller(resMe.data.seller);
    navigate('/');
  };

  const logoutSeller = () => {
    removeAccessToken2();
    setSeller(null);
    navigate('/');
  };

  return (
    <AuthSellerContext.Provider
      value={{ registerSeller, seller, loginSeller, logoutSeller }}
    >
      {children}
    </AuthSellerContext.Provider>
  );
}

export default AuthSellerContextProvider;

export { AuthSellerContext };
