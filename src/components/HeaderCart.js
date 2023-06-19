import { Link } from 'react-router-dom';
import axios from '../config/axios';
import addtocart from '../images/cart.jpg';
import { useEffect, useState } from 'react';

function HeaderCart({ customer }) {
  const customerId = customer.id;

  const [carts, setCarts] = useState([]);

  const fetchMyCart = async () => {
    try {
      const resMyCart = await axios.get(`/cart/${customerId}`);
      setCarts(resMyCart.data.carts);
    } catch (err) {}
  };

  useEffect(() => {
    fetchMyCart();
  }, []);

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
