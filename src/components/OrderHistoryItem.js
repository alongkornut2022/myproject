import React from 'react';
import OrderHistoryProduct2 from './OrderHistoryProduct2';
import OrderHistoryProductItem from './OrderHistoryProductItem';

function OrderHistoryItem() {
  return (
    <>
      <div className="orderhistoryitem_main">
        <div className="orderhistoryitem_main_top">
          <div className="orderhistoryitem_left">
            <OrderHistoryProduct2 />
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
          <div className="item3">00000000</div>
        </div>
      </div>
    </>
  );
}

export default OrderHistoryItem;
