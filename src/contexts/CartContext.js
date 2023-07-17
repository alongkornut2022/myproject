import { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from '../config/axios';

const CartContext = createContext();

function CartContextProvider({ children }) {
  const { customer } = useContext(AuthContext);
  const [carts, setCarts] = useState([]);

  const fetchCart = async () => {
    try {
      const resCart = await axios.get(`/cart/${customer.id}`);
      setCarts(resCart.data.carts);
    } catch (err) {}
  };

  useEffect(() => {
    fetchCart();
  }, [customer]);

  return (
    <CartContext.Provider
      value={{
        fetchCart,
        carts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;

export { CartContext };
