import React from 'react';

function ProductDelivery() {
  return (
    <div className="product_delivery">
      <div className="delivery_method">
        <div>
          <h4>Option Delivery :</h4>
        </div>
        <div>Standard Delivery - ส่งธรรมดา</div>
      </div>
      <div className="delivery_method_change">
        <div className="address_delivery_change">
          <button>เปลี่ยน</button>
        </div>
      </div>
      <div className="product_delivery_label">ค่าขนส่ง</div>
      <div className="product_delivery_price">00</div>
    </div>
  );
}

export default ProductDelivery;
