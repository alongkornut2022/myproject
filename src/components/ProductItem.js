import React from 'react';

function ProductItem() {
  return (
    <div className="productitem_card">
      <div className="productitem_card_image">
        <img src={'https://picsum.photos/200'} />
      </div>
      <div className="productitem_card_detail">
        <div className="productitem_card_detail_top">
          <div className="productname">ชื่อสินค้า</div>
        </div>
        <div className="productitem_card_detail_buttom">
          <div className="productprice">ราคา</div>
          <div className="productalreadysold">ขายแล้ว...ชิ้น</div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
