import axios from '../../config/axios';

function OrderResultItemBottomBar({
  orderCustomer,
  handleClickModal3,
  handleClickModal2,
  handleClickModal4,
  handleClickModal5,
  handleOnClickDeleteOrder,
}) {
  const {
    orderDetailId,
    customerId,
    deliveryId,
    allTotalPrice,
    paymentMethod,
    status,
    deliveryPrice,
  } = orderCustomer;

  const handOnClickReceived = async () => {
    if (
      window.confirm(
        'คุณต้องการ แจ้งยืนยัน ได้รับสินค้าเรียบร้อยแล้ว หรือไม่'
      ) == true
    ) {
      try {
        await axios.patch(
          `/delivery/recived/${customerId}/${deliveryId}/${orderDetailId}`
        );
        alert('แจ้งยืนยันการรับสินค้า เรียบร้อย');
      } catch (err) {}
    } else {
    }
  };
  return (
    <>
      <div className="orderresult_item_delivery">
        <div className="orderresult_item_delivery_title">ค่าจัดส่ง : </div>
        <div className="orderresult_item_delivery_price">฿ {deliveryPrice}</div>
      </div>
      <div className="orderresult_item_middle">
        <div className="orderresult_item_price_title">รวมการสั่งซื้อ : </div>
        <div className="orderresult_item_price_amount">฿ {allTotalPrice}</div>
      </div>

      <div className="orderresult_item_buttom">
        {status === 'อยู่ระหว่างจัดส่ง' ||
        status === 'จัดส่งสำเร็จ' ||
        status === 'ยกเลิก' ? (
          ''
        ) : paymentMethod === 'ชำระเงินปลายทาง' ? (
          <div className="orderresult_item_buttom_standby">
            <div className="orderresult_item_buttom_standby_item">
              เก็บเงินปลายทาง
            </div>
            <button>รออนุมัติ</button>
          </div>
        ) : (
          <div
            className={
              status === 'ชำระเงินแล้ว'
                ? 'orderresult_item_buttom_money2'
                : 'orderresult_item_buttom_money'
            }
          >
            <div className="orderresult_item_buttom_payment">
              {status === 'ชำระเงินแล้ว'
                ? 'ชำระเงินแล้วผ่าน ' + paymentMethod
                : 'ชำระเงินผ่าน'}
            </div>
            <button
              hidden={
                status === 'ชำระเงินแล้ว' || paymentMethod != 'Credit Card'
                  ? 'hidden'
                  : ''
              }
            >
              {paymentMethod}
            </button>
            <button
              onClick={handleClickModal4}
              hidden={
                status === 'ชำระเงินแล้ว' || paymentMethod != 'การโอนเงิน'
                  ? 'hidden'
                  : ''
              }
            >
              {paymentMethod}
            </button>
          </div>
        )}

        {status === 'อยู่ระหว่างจัดส่ง' ||
        status === 'จัดส่งสำเร็จ' ||
        status === 'ยกเลิก' ? (
          ''
        ) : (
          <button onClick={handleOnClickDeleteOrder}>ยกเลิกคำสั่งซื้อ</button>
        )}

        {status === 'จัดส่งสำเร็จ' || status === 'ยกเลิก' ? (
          <button onClick={handleClickModal3}>สั่งซื้ออีกครั้ง</button>
        ) : (
          ''
        )}

        {status === 'จัดส่งสำเร็จ' ? (
          <button onClick={handleClickModal2}>ดูคะแนนสินค้า</button>
        ) : (
          ''
        )}

        {status === 'อยู่ระหว่างจัดส่ง' ? (
          <div className="orderresult_item_buttom_money">
            <button onClick={handOnClickReceived}>แจ้งได้รับสินค้าแล้ว</button>
          </div>
        ) : (
          ''
        )}

        {status === 'จัดส่งสำเร็จ' ? (
          <button onClick={handleClickModal5}>สรุปการสั่งซื้อสินค้า</button>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default OrderResultItemBottomBar;
