import { createContext, useContext, useState } from 'react';
import axios from '../config/axios';
import { AuthContext } from './AuthContext';

const AddressCustomerContext = createContext();

function AddressCustomerContextProvider({ children }) {
  const { customer } = useContext(AuthContext);

  const [address, setAddress] = useState(null);

  const resAddressCustomer = async () => {
    const resAddress = await axios.get(`/address/customer/${customer.id}`);
    setAddress(resAddress.data.customerAddress);
  };
  return (
    <AddressCustomerContext.Provider value={{ resAddressCustomer, address }}>
      {children}
    </AddressCustomerContext.Provider>
  );
}

export default AddressCustomerContextProvider;

export { AddressCustomerContext };
