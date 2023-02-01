import React from 'react';
import ProductOrderTotalItem from '../components/ProductOrderTotalItem';

function OrderTotal() {
  return (
    <div className="ordertotal_main_content">
      <h3>ที่อยู่ในการจัดส่ง</h3>
      <div className="address_delivery">
        <div className="address_delivery_top">
          <div className="username_delivery">
            <h4>ชื่อ-สกุล ผู้รับสินค้า</h4>
          </div>
          <div className="phonenumber">
            <h4>หมายเลขโทรศัพท์</h4>
          </div>
        </div>
        <div className="address_delivery_middle">
          <div className="address_detial">ที่อยู่</div>
          <div className="district">อำเภอ/เขต</div>
        </div>
        <div className="address_delivery_buttom">
          <div className="province">จังหวัด</div>
          <div className="postcard">รหัสไปรษณีย์</div>
          <div className="address_delivery_change">
            <button>แก้ไข</button>
          </div>
        </div>
      </div>

      <h3>สรุปรายการสินค้าสั่งซื้อ</h3>
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

      <h3>การจัดส่ง</h3>
      <div className="product_delivery">
        <div className="delivery_method">
          <div>
            <h4>Option Delivery :</h4>
          </div>
          <div>Standard Delivery - ส่งธรรมดา</div>
        </div>
        <div className="delivery_method_change">
          <button>เปลี่ยน</button>
        </div>
        <div className="product_delivery_label">ค่าขนส่ง</div>
        <div className="product_delivery_price">00</div>
      </div>

      <h3>การชำระเงิน</h3>
      <div className="payment_method">
        <from className="payment_method_input">
          <input type="radio" name="payment method" value="" />
          Credit Card
          <br></br>
          <input type="radio" name="payment method" value="" />
          Internet Banking
          <br></br>
          <input type="radio" name="payment method" value="" />
          Mobile Banking
          <br></br>
          <input type="radio" name="payment method" value="" />
          Online Banking
          <br></br>
          <input type="radio" name="payment method" value="" />
          ชำระเงินปลายทาง
          <br></br>
        </from>
      </div>

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
