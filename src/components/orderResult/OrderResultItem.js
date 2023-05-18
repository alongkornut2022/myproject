import { useEffect, useState } from 'react';
import axios from '../../config/axios';
import OrderResultProductItem from './OrderResultProductItem';

function OrderResultItem({ orderCustomer, customerId }) {
  const { orderDetailId, shopName, allTotalPrice, paymentMethod, status } =
    orderCustomer;

  const [orderItem, setOrderItem] = useState([]);

  const fetchOrderItem = async () => {
    try {
      const resOrderItem = await axios.get(
        `/purchase/order/productitem/${orderDetailId}/customer/${customerId}`
      );
      setOrderItem(resOrderItem.data.orderItem);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnClickDeleteOrder = async () => {
    if (
      window.confirm('คุณแน่ใจหรือว่า ต้องการ "ยกเลิกคำสั่งซื้อ" ? ') === true
    ) {
      try {
        const deleteOrder = await axios.delete(
          `/purchase/order/${orderDetailId}/customer/${customerId}`
        );
      } catch (err) {
        console.log(err);
      } finally {
        document.location.reload();
      }
    } else {
    }
  };

  useEffect(() => {
    fetchOrderItem();
  }, [orderCustomer]);

  return (
    <>
      <div className="orderresult_container_item_main">
        <div className="orderresult_item_top">
          <div className="orderresult_item_seller">
            <div className="orderresult_item_seller_left">
              ร้านค้า : {shopName}
            </div>
            <div className="orderresult_item_seller_right">
              {status === 'อยู่ระหว่างจัดส่ง' ? (
                <div className="orderresult_item_seller_right_item">
                  | บริษัทขนส่งกำลังนำส่งพัสดุให้คุณ
                </div>
              ) : (
                ''
              )}
              {status === 'จัดส่งสำเร็จ' ? (
                <div className="orderresult_item_seller_right_item">
                  | ให้คะแนน
                </div>
              ) : (
                ''
              )}
              {status === 'รอชำระเงิน' ? (
                <div className="orderresult_item_seller_right_item">
                  | รอชำระเงิน
                </div>
              ) : (
                ''
              )}
              {status === 'รออนุมัติ' ? (
                <div className="orderresult_item_seller_right_item">
                  | รออนุมัติ
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="orderresult_item_product">
            {orderItem.map((el) => (
              <OrderResultProductItem key={el.id} orderItem={el} />
            ))}
          </div>
        </div>
        <div className="orderresult_item_middle">
          <div className="orderresult_item_price_title">รวมการสั่งซื้อ : </div>
          <div className="orderresult_item_price_amount">฿ {allTotalPrice}</div>
        </div>
        <div className="orderresult_item_buttom">
          {status === 'อยู่ระหว่างจัดส่ง' || status === 'จัดส่งสำเร็จ' ? (
            ''
          ) : paymentMethod === 'ชำระเงินปลายทาง' ? (
            <div className="orderresult_item_buttom_standby">
              <button>รออนุมัติ</button>
            </div>
          ) : (
            <div className="orderresult_item_buttom_money">
              <div className="orderresult_item_buttom_payment">
                ชำระเงินผ่าน
              </div>
              <button>{paymentMethod}</button>
            </div>
          )}
          {status === 'อยู่ระหว่างจัดส่ง' || status === 'จัดส่งสำเร็จ' ? (
            ''
          ) : (
            <button onClick={handleOnClickDeleteOrder}>ยกเลิกคำสั่งซื้อ</button>
          )}
        </div>
      </div>
    </>
  );
}

export default OrderResultItem;
