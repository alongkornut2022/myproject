import React from 'react';
import { NavLink } from 'react-router-dom';

function CategoryList() {
  return (
    <div className="category_list">
      <ul>
        <li>
          <NavLink end to="/PasswordEdit">
            เสื้อผ้า
          </NavLink>
        </li>
        <li>
          <NavLink end to="/PasswordEdit">
            กระเป๋า
          </NavLink>
        </li>
        <li>
          <NavLink end to="/PasswordEdit">
            รองเท้า
          </NavLink>
        </li>
        <li>
          <NavLink end to="/PasswordEdit">
            เครื่องสำอาง
          </NavLink>
        </li>
        <li>
          <NavLink end to="/PasswordEdit">
            วิตามิน อาหารเสริม
          </NavLink>
        </li>
        <li>
          <NavLink end to="/PasswordEdit">
            เครื่องประดับ อัญมณี
          </NavLink>
        </li>
        <li>
          <NavLink end to="/PasswordEdit">
            นาฬิกา
          </NavLink>
        </li>
        <li>
          <NavLink end to="/PasswordEdit">
            โทรศัพท์มือถือ
          </NavLink>
        </li>
        <li>
          <NavLink end to="/PasswordEdit">
            อุปกรณ์ไอที
          </NavLink>
        </li>
        <li>
          <NavLink end to="/PasswordEdit">
            หนังสือ นิตยสาร
          </NavLink>
        </li>
        <li>
          <NavLink end to="/PasswordEdit">
            เฟอร์นิเจอร์ ของแต่งบ้าน
          </NavLink>
        </li>
        <li>
          <NavLink end to="/PasswordEdit">
            ของเล่น
          </NavLink>
        </li>
        <li>
          <NavLink end to="/PasswordEdit">
            เครื่องใช้ไฟฟ้า
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default CategoryList;
