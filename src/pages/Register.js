import React from 'react';

function Register() {
  return (
    <div className="home_main_content">
      <div className="register_title">
        <h3>สมัครสมาชิกใหม่</h3>
      </div>
      <div className="register_main_content">
        <form>
          <div className="register_main_content_top">
            <div className="register_inner_content">
              <div className="item1">
                <label for="username">User name</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="ชื่อผู้ใช้"
                />
              </div>
            </div>

            <div className="register_inner_content">
              <div className="item2">
                <label for="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="อีเมล์"
                />
              </div>
              <div className="item3">
                <label for="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="หมายเลขโทรศัพท์"
                />
              </div>
            </div>

            <div className="register_inner_content">
              <div className="item4">
                <label for="password">Password</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="รหัสผ่าน"
                />
              </div>
              <div className="item5">
                <label for="password">Confirm Password</label>
                <input
                  type="text"
                  id="Confirm Password"
                  name="Confirm Password"
                  placeholder="ยืนยันรหัสผ่าน"
                />
              </div>
            </div>
          </div>

          <div className="register_main_content_buttom">
            <div>
              <input type="submit" value="สมัครสมาชิก" />
            </div>
            <div>
              <input type="submit" value="ยกเลิก" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
