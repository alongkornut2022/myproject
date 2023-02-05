import React from 'react';
import { NavLink } from 'react-router-dom';

function NavbarCustomer() {
  return (
    <>
      <div></div>
      <div className="customer_list">
        <h5>จัดการบัญชี</h5>
        <ul>
          <li>
            <NavLink end to="/CustomerDetail">
              ข้อมูลส่วนตัว
            </NavLink>
          </li>
          <li>
            <NavLink end to="/AddressBook">
              สมุดที่อยู่
            </NavLink>
          </li>
          <li>
            <NavLink end to="/PasswordEdit">
              เปลี่ยนรหัสผ่าน
            </NavLink>
          </li>
        </ul>
        <h5>การสั่งซื้อสินค้า</h5>
        <ul>
          <li>
            <NavLink end to="/AddToCart">
              ตะกร้าสินค้า
            </NavLink>
          </li>
          <li>
            <NavLink end to="/OrderHistory">
              ประวัติการสั่งซื้อ
            </NavLink>
          </li>
          <li>
            <NavLink end to="/HomePage">
              ออกจากระบบ
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavbarCustomer;
