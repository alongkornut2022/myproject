function OrderResultItemTopBar({
  orderCustomer,
  orderRating,
  handleClickModal,
}) {
  const { orderDetailId, shopName, status, createdAt } = orderCustomer;

  const dateInput = new Date(createdAt);

  const date = dateInput.toLocaleString('en-GB', { timeZone: 'UTC' });

  // const day = date.getDate();
  // const monthNum = date.getMonth();
  // const month = monthNum + 1;
  // const year = date.getFullYear();
  // const hourNum = date.getHours();
  // const minutesNum = date.getMinutes();
  // const hour = hourNum > 9 ? hourNum : '0' + hourNum;
  // const minutes = minutesNum > 9 ? minutesNum : '0' + minutesNum;

  return (
    <>
      <div className="orderresult_item_seller_left">
        <div className="orderresult_item_seller_left_title">
          ร้านค้า : {shopName}
        </div>
        <div>
          วันสั่งซื้อ : {date.toLocaleString('en-GB', { timeZone: 'UTC' })}
          {/* วันสั่งซื้อ : {day}/{month}/{year} {hour}:{minutes} */}
        </div>
      </div>
      <div className="orderresult_item_seller_right">
        {status === 'อยู่ระหว่างจัดส่ง' ? (
          <div className="orderresult_item_seller_right_item">
            <div className="orderresult_item_seller_right_item_item1">
              {'หมายเลขคำสั่งซื้อ : ' + ' ' + orderDetailId + ' ' + ''}
            </div>
            | บริษัทขนส่งกำลังนำส่งพัสดุให้คุณ
          </div>
        ) : (
          ''
        )}
        {status === 'จัดส่งสำเร็จ' ? (
          <div className="orderresult_item_seller_right_item">
            <div className="orderresult_item_seller_right_item_item1">
              {'หมายเลขคำสั่งซื้อ : ' +
                ' ' +
                orderDetailId +
                ' ' +
                ' ' +
                '| จัดส่งสำเร็จ '}
            </div>

            {orderRating ? (
              ' | ให้คะแนนแล้ว'
            ) : (
              <button onClick={handleClickModal}>| ยังไม่ได้ให้คะแนน</button>
            )}
          </div>
        ) : (
          ''
        )}
        {status === 'รอชำระเงิน' ? (
          <div className="orderresult_item_seller_right_item">| รอชำระเงิน</div>
        ) : (
          ''
        )}
        {status === 'ชำระเงินแล้ว' ? (
          <div className="orderresult_item_seller_right_item">
            <div className="orderresult_item_seller_right_item_item1">
              {'หมายเลขคำสั่งซื้อ : ' + ' ' + orderDetailId + ' ' + ''}
            </div>
            | ชำระเงินแล้ว
          </div>
        ) : (
          ''
        )}
        {status === 'รออนุมัติ' ? (
          <div className="orderresult_item_seller_right_item">| รออนุมัติ</div>
        ) : (
          ''
        )}
        {status === 'อนุมัติแล้ว' ? (
          <div className="orderresult_item_seller_right_item">
            <div className="orderresult_item_seller_right_item_item1">
              {'หมายเลขคำสั่งซื้อ : ' + ' ' + orderDetailId + ' ' + ''}
            </div>
            | อนุมัติแล้ว
          </div>
        ) : (
          ''
        )}
        {status === 'ยกเลิก' ? (
          <div className="orderresult_item_seller_right_item">
            <div className="orderresult_item_seller_right_item_item1">
              {'หมายเลขคำสั่งซื้อ : ' + ' ' + orderDetailId + ' ' + ''}
            </div>
            | ยกเลิก
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default OrderResultItemTopBar;
