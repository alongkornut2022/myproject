import React from 'react';

function ProductCartListItem() {
  return (
    <div className="product_cart_listitem">
      <div className="item1">
        <from>
          <input type="checkbox"></input>
        </from>
      </div>

      <div className="item2">
        <img src="https:\\picsum.photos\90" />
      </div>
      <div className="item3">
        <div className="item3_1">ชื่อสินค้า ..........</div>
        <div className="item3_2">00000000</div>
        <div className="item3_3">
          <button>-</button>
          <span>0000</span>
          <button>+</button>
        </div>

        <div className="item3_4">00000000</div>
      </div>
      <div className="item4">
        <div className="address_delivery_change">
          <button>ลบ</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCartListItem;
