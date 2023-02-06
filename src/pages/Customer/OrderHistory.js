import React from 'react';
import NavbarCustomer from '../../components/NavbarCustomer';
import OrderHistoryItem from '../../components/OrderHistoryItem';
import UserItem from '../../components/UserItem';

function OrderHistory() {
  return (
    <div className="home_main_content">
      <div className="home_main_content_top">
        <div className="customer_main_content_left">
          <div className="customer_main_content_left_top">
            <UserItem />
          </div>
          <div className="customer_main_content_left_buttom">
            <NavbarCustomer />
          </div>
        </div>

        <div className="addressbook_main_content_right">
          <div className="addressbook_main_content_right_top">
            <h4>ประวัติการสั่งซื้อ</h4>
          </div>

          <div className="orderhistory_main_content">
            <div className="orderhistory_filter_bar">
              <div className="item1">
                <from>
                  <label>ค้นหา</label>
                  <input type="text" />
                </from>
              </div>
              <div className="item2">
                <form>
                  <label>เรียงโดย</label>
                  <select name="statusorder">
                    <option value="all">วันที่สั่งซื้อ</option>
                    <option value="success">คำสั่งซื้อ</option>
                    <option value="indelivery">รายการสินค้า</option>
                  </select>
                </form>
              </div>
              <div className="item3">
                <form>
                  <label>สถานะ</label>

                  <select name="statusorder">
                    <option value="all">ทั้งหมด</option>
                    <option value="success">จัดส่งสำเร็จ</option>
                    <option value="indelivery">อยู่ระหว่างขนส่ง</option>
                    <option value="cancel">ยกเลิก</option>
                  </select>
                </form>
              </div>
            </div>

            <div className="orderhistory_list_bar_top">
              <div className="item1">วันที่สั่งซื้อ</div>
              <div className="item2">คำสั่งซื้อ</div>
              <div className="item3">สถานะ</div>
              <div className="item4">รายการสินค้า</div>
              <div className="item5">ราคาต่อชิ้น</div>
              <div className="item6">จำนวน</div>
              <div className="item7">ราคารวม</div>
            </div>

            <OrderHistoryItem />
            <OrderHistoryItem />
            <OrderHistoryItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
