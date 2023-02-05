import React from 'react';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <div className="home_main_content">
      <div className="register_title">
        <h3>กรุณาเข้าสู่ระบบ</h3>
      </div>
      <div className="register_main_content">
        <form action="">
          <div className="login_main_content_top">
            <div className="login_inner_content_left">
              <div className="item1">
                <label for="username">Email or Phone Number</label>
                <input
                  type="text"
                  id="emailOrPhonenumber"
                  name="emailOrPhonenumber"
                  placeholder="อีเมล์ หรือ หมายเลขโทรศัพท์"
                />
              </div>
              <div className="item2">
                <label for="password">Password</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="รหัสผ่าน"
                />
              </div>
              <div className="item3">
                <NavLink end to="/Login">
                  ลืมรหัสผ่าน
                </NavLink>
              </div>
            </div>

            <div className="login_inner_content_right">
              <NavLink end to="/Register">
                สมัครสมาชิกใหม่ ลงทะเบียนที่นี้
              </NavLink>
            </div>
          </div>

          <div className="login_main_content_bottom">
            <div>
              <input type="submit" value="เข้าสู่ระบบ" />
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

export default Login;
