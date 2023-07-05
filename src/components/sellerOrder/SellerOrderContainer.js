import { useEffect, useState } from 'react';
import axios from '../../config/axiosSeller';
import SellerOrderItem from './SellerOrderItem';
import SellerOrderNavBar from './SellerOrderNavBar';
import SellerOrderSearchBar from './SellerOrderSearchBar';
import SellerNewOrder from './SellerNewOrder';
import SellerOrderListBar from './SellerOrderListBar';

function SellerOrderContainer({ seller }) {
  const [orderSeller, setOrderSeller] = useState([]);
  const [navBar, setNavBar] = useState('');

  const [orderNumber, setOrderNumber] = useState('');
  const [productName, setProductName] = useState('');
  const [customer, setCustomer] = useState('');
  const [orderDateStart, setOrderDateStart] = useState('');
  const [orderDateTo, setOrderDateTo] = useState('');
  const [orderSumPriceStart, setOrderSumPriceStart] = useState('');
  const [orderSumPriceTo, setOrderSumPriceTo] = useState('');

  const fetchOrderSeller = async (status) => {
    try {
      const resOrderSeller = await axios.get(
        `/sellers/order/${seller.id}?status=${status}`
      );
      setOrderSeller(resOrderSeller.data.orderSeller);
      setNavBar(status);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrderSeller('ทั้งหมด');
  }, []);

  const handleOnClickSearchOrder = async (sort) => {
    try {
      const resSearchOrder = await axios.get(
        `/sellers/order/search/${seller.id}?navBar=${navBar}&&orderNumber=${orderNumber}&&productName=${productName}&&customer=${customer}&&orderDateStart=${orderDateStart}&&orderDateTo=${orderDateTo}&&orderSumPriceStart=${orderSumPriceStart}&&orderSumPriceTo=${orderSumPriceTo}&&sort=${sort}`
      );
      setOrderSeller(resSearchOrder.data.orderSeller);
    } catch (err) {
      console.log(err);
    }
  };

  const dataInputOrderSearch = {
    orderNumber,
    setOrderNumber,
    productName,
    setProductName,
    customer,
    setCustomer,
    orderDateStart,
    setOrderDateStart,
    orderDateTo,
    setOrderDateTo,
    orderSumPriceStart,
    setOrderSumPriceStart,
    orderSumPriceTo,
    setOrderSumPriceTo,
  };

  return (
    <>
      <div className="orderresult_container_main">
        <div className="orderresult_container_navbar">
          <SellerOrderNavBar
            fetchOrderSeller={fetchOrderSeller}
            navBar={navBar}
            orderSeller={orderSeller}
          />
        </div>

        <div className="sellerorder_container_searchbar">
          <SellerOrderSearchBar
            sellerId={seller.id}
            setOrderSeller={setOrderSeller}
            navBar={navBar}
            dataInputOrderSearch={dataInputOrderSearch}
          />
        </div>

        <div className="order_neworder_container">
          <SellerNewOrder
            seller={seller}
            handleOnClickSearchOrder={handleOnClickSearchOrder}
            navBar={navBar}
          />
        </div>

        <div className="sellerorder_container_item_listbar">
          <div className="sellerorder_container_item_listbar_left">
            <div className="sellerorder_container_item_listbar_item1">
              สินค้า
            </div>
          </div>

          <SellerOrderListBar
            handleOnClickSearchOrder={handleOnClickSearchOrder}
          />
        </div>

        <div className="orderresult_container_item">
          {orderSeller.map((el) => (
            <SellerOrderItem
              key={el.id}
              orderSeller={el}
              sellerId={seller.id}
              handleOnClickSearchOrder={handleOnClickSearchOrder}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SellerOrderContainer;
