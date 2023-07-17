import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import addtocart from '../images/cart.jpg';

function HeaderCart({ customer }) {
  const { carts } = useContext(CartContext);

  return (
    <>
      <div className="header_right_addtocart_main">
        <Link end to={customer ? `customer/cart/${customer.id}` : '/Login'}>
          <div className="header_right_addtocart_item1">
            <img src={addtocart} />
            <div className="header_right_addtocart_item2">
              {carts.length > 0 ? carts.length : ''}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default HeaderCart;
