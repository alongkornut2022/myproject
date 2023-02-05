import React from 'react';
import NavbarCustomer from '../../components/NavbarCustomer';

function CustomerDetail() {
  return (
    <div className="home_main_content">
      <div className="home_main_content_top">
        <div className="customer_main_content_left">
          <div className="customer_main_content_left_top">
            <div className="user_pic">
              <img src="https://picsum.photos/50" />
            </div>
            <div className="user_name">
              <h4>ชื่อผู้ใช้</h4>
            </div>
          </div>
          <div className="customer_main_content_left_buttom">
            <NavbarCustomer />
          </div>
        </div>

        <div className="customer_main_content_right">
          <div className="customer_main_content_right_top">
            <h3>ข้อมูลส่วนตัว</h3>
          </div>

          <div className="customer_main_content_right_middle">
            <form>
              <div className="customer_inner_content">
                <div className="item1">
                  <label for="username">Username</label>
                </div>
                <div className="item2">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="ชื่อผู้ใช้"
                  />
                </div>
                <div className="item4">
                  <button>แก้ไข</button>
                </div>
              </div>

              <div className="customer_inner_content">
                <div className="item1">
                  <label for="email">Email</label>
                </div>
                <div className="item2">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="อีเมล์"
                  />
                </div>
                <div className="item4">
                  <button>แก้ไข</button>
                </div>
              </div>

              <div className="customer_inner_content">
                <div className="item1">
                  <label for="phoneNumber">Phone Number</label>
                </div>
                <div className="item2">
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="หมายเลขโทรศัพท์"
                  />
                </div>
                <div className="item4">
                  <button>แก้ไข</button>
                </div>
              </div>

              <div className="customer_inner_content">
                <div className="item1">
                  <label for="gender">เพศ</label>
                </div>
                <div className="item3">
                  <div className="item3_1">
                    <div>
                      <input type="radio" name="gender" value="male" />
                    </div>
                    <div>
                      <input type="radio" name="gender" value="female" />
                    </div>
                    <div>
                      <input type="radio" name="gender" value="other" />
                    </div>
                  </div>
                  <div className="item3_2">
                    <label for="gender">ชาย</label>
                    <label for="gender">หญิง </label>
                    <label for="gender">อื่น ๆ</label>
                  </div>
                </div>
              </div>

              <div className="customer_inner_content">
                <div className="item1">
                  <label for="birthday">วัน/เดือน/ปี เกิด</label>
                </div>
                <div className="item2">
                  <input type="date" id="birthday" name="birthday" />
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

export default CustomerDetail;
