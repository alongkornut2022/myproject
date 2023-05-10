import { createContext, useContext, useEffect, useState } from 'react';
import axios from '../config/axios';
import { AuthContext } from './AuthContext';

const AddressCustomerContext = createContext();

function AddressCustomerContextProvider({ children }) {
  const [customerAddress, setCustomerAddress] = useState([]);

  const { customer } = useContext(AuthContext);

  const fetchAddressCustomer = async () => {
    try {
      const resAddress = await axios.get(`/address/customer/${customer.id}`);
      setCustomerAddress(resAddress.data.customerAddress);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAddressCustomer();
  }, []);

  return (
    <AddressCustomerContext.Provider value={{ customerAddress }}>
      {children}
    </AddressCustomerContext.Provider>
  );
}

export default AddressCustomerContextProvider;

export { AddressCustomerContext };
