function OrderResultItemBottomBar({
  orderCustomer,
  handleClickModal3,
  handleClickModal2,
  handleOnClickDeleteOrder,
}) {
  const { allTotalPrice, paymentMethod, status, deliveryPrice } = orderCustomer;
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
        {status === 'อยู่ระหว่างจัดส่ง' || status === 'จัดส่งสำเร็จ' ? (
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
            <button hidden={status === 'ชำระเงินแล้ว' ? 'hidden' : ''}>
              {paymentMethod}
            </button>
          </div>
        )}

        {status === 'อยู่ระหว่างจัดส่ง' || status === 'จัดส่งสำเร็จ' ? (
          ''
        ) : (
          <button onClick={handleOnClickDeleteOrder}>ยกเลิกคำสั่งซื้อ</button>
        )}

        {status === 'จัดส่งสำเร็จ' ? (
          <button onClick={handleClickModal3}>สั่งซื้ออีกครั้ง</button>
        ) : (
          ''
        )}

        {status === 'จัดส่งสำเร็จ' ? (
          <button onClick={handleClickModal2}>ดูคะแนนสินค้า</button>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default OrderResultItemBottomBar;
