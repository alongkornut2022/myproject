import { useState } from 'react';
import axios from '../../config/axios';
import buttonSearch from '../../images/download.png';

function OrderResultSearchBar({ customerId, setOrderCustomer }) {
  const [searchOrder, setSearchOrder] = useState();

  const handleOnClickSearchOrder = async (event) => {
    if (event.key === 'Enter') {
      try {
        const resSearchOrder = await axios.get(
          `/purchase/order/search/${customerId}?keyword=${searchOrder}`
        );
        setOrderCustomer(resSearchOrder.data.orderCustomer);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="orderresult_searchbar_button">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="orderresult_searchbar_input">
        <input
          type="text"
          placeholder="ค้นหาโดยใช้ ชื่อผู้ขาย หมายเลขคำสั่งซื้อ หรือ ชื่อสินค้า"
          onChange={(event) => setSearchOrder(event.target.value)}
          onKeyDown={handleOnClickSearchOrder}
        />
      </div>
    </>
  );
}

export default OrderResultSearchBar;
