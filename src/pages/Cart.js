import ProductCartListItem from '../components/ProductCartListItem';

function Cart() {
  return (
    <>
      <div className="addressbook_main_content_right_top">
        <h4>ตะกร้าสินค้า</h4>
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
          <div className="item3_1">รวม</div>
          <div className="item3_2">000</div>
          <div className="item3_3">สินค้า</div>
          <div className="item4">เป็นเงิน</div>
          <div className="item5">0000000</div>
          <div className="item6">
            <button>สั่งสินค้า</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
