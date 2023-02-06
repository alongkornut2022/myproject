import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <div className="item">
          <NavLink end to="/ProductCategory">
            หมวดหมู่สินค้า
          </NavLink>
        </div>
      </div>
      <div className="navbar_right">
        <div className="item">
          <NavLink end to="/HomePage">
            หน้าแรก
          </NavLink>
        </div>
        <div className="item">
          <NavLink end to="/HowToOrderPage">
            วิธีการสั่งซื้อ
          </NavLink>
        </div>
        <div className="item">
          <NavLink end to="/PaymentMethodPage">
            วิธีการชำระเงิน
          </NavLink>
        </div>
        <div className="item">
          <NavLink end to="/Register">
            ลงทะเบียน
          </NavLink>
        </div>
        <div className="item">
          <NavLink end to="/Login">
            เข้าสู่ระบบ
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
