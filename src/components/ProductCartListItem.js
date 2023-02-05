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
        <div className="item2_1">
          <img src="https:\\picsum.photos\90" />
        </div>
        <div className="item2_2">ชื่อสินค้า ..........</div>
      </div>
      <div className="item3">0000</div>
      <div className="item4">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
      <div className="item5">0000</div>
      <div className="item6">
        <div className="address_delivery_change">
          <button>ลบ</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCartListItem;
