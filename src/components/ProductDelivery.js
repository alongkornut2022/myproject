import React from 'react';

function ProductDelivery() {
  return (
    <div className="product_delivery">
      <div className="delivery_method">
        <h4>Option Delivery:</h4>
      </div>
      <div className="delivery_option">
        <form>
          <select>
            <option value="Standard Delivery">
              Standard Delivery-ส่งธรรมดา
            </option>
            <option></option>
          </select>
        </form>
      </div>

      <div className="product_delivery_label">ค่าขนส่ง</div>
      <div className="product_delivery_price">0000</div>
    </div>
  );
}

export default ProductDelivery;
