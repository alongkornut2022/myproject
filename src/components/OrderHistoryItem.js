import React from 'react';
import OrderHistoryProductItem from './OrderHistoryProductItem';

function OrderHistoryItem() {
  return (
    <>
      <div className="orderhistoryitem_main">
        <div className="orderhistoryitem_main_top">
          <div className="orderhistoryitem_left">
            <div className="item1">00-00-0000</div>
            <div className="item2">1234567</div>
            <div className="item3">อยู่ระหว่างการขนส่ง</div>
          </div>

          <div className="orderhistoryitem_right">
            <OrderHistoryProductItem />
            <OrderHistoryProductItem />
            <OrderHistoryProductItem />
            <OrderHistoryProductItem />
          </div>
        </div>
        <div className="orderhistory_list_bar_bottom">
          <div className="item1"></div>
          <div className="item2">ราคารวมสินค้า</div>
          <div className="item3">00000</div>
        </div>
      </div>
    </>
  );
}

export default OrderHistoryItem;
