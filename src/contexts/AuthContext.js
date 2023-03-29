import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from '../services/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [customer, setCustomer] = useState(null);
  // const [customerAddress, setCustomerAddress] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const resMe = await axios.get('/customers/me');
          setCustomer(resMe.data.customer);
        }
      } catch (err) {
        removeAccessToken();
        navigate('/login');
      }
    };

    fetchMe();
  }, []);

  const register = async (
    username,
    email,
    phoneNumber,
    password,
    confirmPassword
  ) => {
    const res = await axios.post(
      '/customers/register',
      username,
      email,
      phoneNumber,
      password,
      confirmPassword
    );
    setAccessToken(res.data.token);
    const resMe = await axios.get('/customers/me');
    setCustomer(resMe.data.customer);
  };

  const login = async (emailOrPhoneNumber, password) => {
    const res = await axios.post('/customers/login', {
      emailOrPhoneNumber,
      password,
    });
    setAccessToken(res.data.token);
    const resMe = await axios.get('/customers/me');
    setCustomer(resMe.data.customer);
    // const resAddress = await axios.get(`/address/customer/${customer.id}`);
    // setCustomerAddress(resAddress.data.customerAddress);
    navigate('/');
  };

  const logout = () => {
    removeAccessToken();
    setCustomer(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ register, customer, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

export { AuthContext };
