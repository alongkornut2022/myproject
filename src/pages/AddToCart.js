import React from 'react';
import ProductCartListItem from '../components/ProductCartListItem';

function AddToCart() {
  return (
    <>
      <div>
        <h3>ตะกร้าสินค้า</h3>
        <br></br>
      </div>
      <div className="product_cart_main_content">
        <div className="product_cart_listbar_top">
          <div className="item1">
            <from>
              <input type="checkbox"></input>
            </from>
          </div>
          <div className="item2">รายการสินค้า</div>
          <div className="item3">ราคาต่อชิ้น</div>
          <div className="item4">จำนวน</div>
          <div className="item5">ราคารวม</div>
          <div className="item6">แก้ไข</div>
        </div>
        <ProductCartListItem />
        <ProductCartListItem />
        <ProductCartListItem />
        <div className="product_cart_listbar_buttom">
          <div className="item1">
            <from>
              <input type="checkbox"></input>
            </from>
          </div>
          <div className="item2">เลือกทั้งหมด</div>
          <div className="item3">รวม 0 สินค้า</div>
          <div className="item4">รวมเป็นเงิน 0000000 </div>
          <div className="item5">
            <button>สั่งสินค้า</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddToCart;
