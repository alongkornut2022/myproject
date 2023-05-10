import { useContext } from 'react';
import CartContainer from '../components/carts/CartContainer';
import { AuthContext } from '../contexts/AuthContext';

function Cart() {
  const { customer } = useContext(AuthContext);

  return (
    <>
      <CartContainer customer={customer} />
    </>
  );
}

export default Cart;
