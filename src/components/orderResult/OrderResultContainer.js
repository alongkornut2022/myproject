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

  const fetchOrderCustomer = async (status) => {
    try {
      const resOrderCustomer = await axios.get(
        `/purchase/order/${customer.id}?status=${status}`
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
      <div className="addressbook_main_content_right_top">
        <h5>การสั่งซื้อของฉัน</h5>
      </div>
      <div className="orderresult_container_navbar">
        <OrderResultNavBar
          fetchOrderCustomer={fetchOrderCustomer}
          navBar={navBar}
        />
      </div>

      {navBar === 'ทั้งหมด' ? (
        <div className="orderresult_container_searchbar">
          <OrderResultSearchBar
            customerId={customer.id}
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
            customerId={customer.id}
          />
        ))}
      </div>
    </div>
  );
}

export default OrderResultContainer;
