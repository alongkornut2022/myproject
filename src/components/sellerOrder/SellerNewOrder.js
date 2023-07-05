import { useEffect, useState } from 'react';
import axios from '../../config/axiosSeller';

function SellerNewOrder({ seller, handleOnClickSearchOrder, navBar }) {
  const [newOrder, setNewOrder] = useState([]);

  const fetchNewOrder = async (status) => {
    try {
      const resNewOrder = await axios.get(
        `/sellers/order/${seller.id}?status=${status}`
      );
      setNewOrder(resNewOrder.data.orderSeller);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNewOrder('ชำระเงินแล้ว');
  }, [seller]);

  return (
    <>
      <div className="order_neworder_container_1">
        <div
          className="order_neworder_container_left"
          hidden={
            navBar === 'ทั้งหมด' || navBar === 'ชำระเงินแล้ว' ? '' : 'hidden'
          }
        >
          {newOrder.length > 0 ? (
            <>
              <div className="order_neworder_item1">
                * มี {newOrder.length} คำสั่งซื้อใหม่
              </div>
              <div className="order_neworder_item2"> ที่ต้องจัดส่ง </div>{' '}
            </>
          ) : (
            <div className="order_neworder_item2">(ไม่มีคำสั่งซื้อใหม่)</div>
          )}
        </div>
      </div>
      <div className="order_neworder_container_2">
        <div className="order_neworder_container_right">
          <div className="orderresult_container_item_listbar_icon">
            <button
              onClick={() => handleOnClickSearchOrder('od.created_at desc')}
            >
              <i class="fa-solid fa-chevron-up fa-xs"></i>
            </button>
          </div>
          เรียงตามวันที่สั่งซื้อ
          <div className="orderresult_container_item_listbar_icon">
            <button onClick={() => handleOnClickSearchOrder('od.created_at')}>
              <i class="fa-solid fa-chevron-down fa-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerNewOrder;
