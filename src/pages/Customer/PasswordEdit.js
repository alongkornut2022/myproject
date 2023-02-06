import React from 'react';
import NavbarCustomer from '../../components/NavbarCustomer';
import UserItem from '../../components/UserItem';

function ChangePassword() {
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
        <div className="customer_main_content_right">
          <div className="customer_main_content_right_top">
            <h3>ตั้งค่ารหัสผ่านใหม่</h3>
          </div>

          <div className="customer_main_content_right_middle">
            <form>
              <div className="customer_inner_content">
                <div className="item1">
                  <label for="newPassword">New Password</label>
                </div>
                <div className="item2">
                  <input
                    type="text"
                    id="newPassword"
                    name="newPassword"
                    placeholder="รหัสผ่านใหม่"
                  />
                </div>
              </div>

              <div className="customer_inner_content">
                <div className="item1">
                  <label for="confirmPassword">Confirm Password</label>
                </div>
                <div className="item2">
                  <input
                    type="text"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="ยืนยันรหัสผ่าน"
                  />
                </div>
              </div>

              <div className="customer_inner_content">
                <div className="item1">
                  <label for="checkOtp">รหัสตรวจสอบ</label>
                </div>
                <div className="item2">
                  <input
                    type="text"
                    id="checkOtp"
                    name="checkOtp"
                    placeholder="รหัสตรวจสอบ"
                  />
                </div>
                <div className="item4">
                  <div className="address_delivery_change">
                    <button>ขอรหัส</button>
                  </div>
                </div>
              </div>

              <div className="customer_inner_content_submit">
                <input type="submit" value="บันทึก" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
