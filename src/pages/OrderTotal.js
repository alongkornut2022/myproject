import React from 'react';
import AddressDelivery from '../components/AddressDelivery';
import PaymentMethod from '../components/PaymentMethod';
import ProductDelivery from '../components/ProductDelivery';
import ProductOrderTotalItem from '../components/ProductOrderTotalItem';

function OrderTotal() {
  return (
    <div className="ordertotal_main_content">
      <h4>ที่อยู่ในการจัดส่ง</h4>
      <AddressDelivery />

      <h4>สรุปรายการสินค้าสั่งซื้อ</h4>
      <div className="product_sell_list">
        <div className="product_sell_listbar_top">
          <div className="item0"></div>
          <div className="item1">รายการสินค้า</div>
          <div className="item2">ราคาต่อชิ้น</div>
          <div className="item3">จำนวน</div>
          <div className="item4">ราคารวม</div>
        </div>

        <div>
          <ProductOrderTotalItem />
          <ProductOrderTotalItem />
          <ProductOrderTotalItem />
          <ProductOrderTotalItem />
        </div>

        <div className="product_sell_listbar_buttom">
          <div className="item1"></div>
          <div className="item2">ราคารวมสินค้า</div>
          <div className="item3">00000</div>
        </div>
      </div>

      <h4>การจัดส่ง</h4>
      <ProductDelivery />

      <h4>การชำระเงิน</h4>
      <PaymentMethod />

      <div className="price_All">
        <div className="item1"></div>
        <div className="item2">รวมชำระเงินทั้งหมด</div>
        <div className="item3">
          <h3>00000</h3>
        </div>
      </div>

      <div className="ordertotal_button">
        <div className="item1"></div>
        <button>สั่งซื้อสินค้า</button>
      </div>
    </div>
  );
}

export default OrderTotal;
