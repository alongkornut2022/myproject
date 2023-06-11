import { useContext, useEffect, useState } from 'react';
import axios from '../../config/axios';
import OrderResultItem from './OrderResultItem';
import OrderResultNavBar from './OrderResultNavBar';
import OrderResultSearchBar from './OrderResultSearchBar';
import { AuthContext } from '../../contexts/AuthContext';

function OrderResultContainer() {
  const [orderCustomer, setOrderCustomer] = useState([]);
  const [navBar, setNavBar] = useState();

  const { customer } = useContext(AuthContext);
  const customerId = customer.id;

  const fetchOrderCustomer = async (status) => {
    try {
      const resOrderCustomer = await axios.get(
        `/purchase/order/${customerId}?status=${status}`
      );
      setOrderCustomer(resOrderCustomer.data.orderCustomer);
      setNavBar(status);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrderCustomer('ทั้งหมด');
  }, []);

  return (
    <div className="orderresult_container_main">
      <div className="orderresult_container_navbar">
        <OrderResultNavBar
          fetchOrderCustomer={fetchOrderCustomer}
          navBar={navBar}
        />
      </div>

      {navBar === 'ทั้งหมด' ? (
        <div className="orderresult_container_searchbar">
          <OrderResultSearchBar
            customerId={customerId}
            setOrderCustomer={setOrderCustomer}
          />
        </div>
      ) : (
        ''
      )}

      <div className="orderresult_container_item">
        {orderCustomer.map((el) => (
          <OrderResultItem
            key={el.id}
            orderCustomer={el}
            customerId={customerId}
          />
        ))}
      </div>
    </div>
  );
}

export default OrderResultContainer;
