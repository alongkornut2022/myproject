import React from 'react';
import { NavLink } from 'react-router-dom';

function CategoryList() {
  return (
    <div className="category_list">
      <ul>
        <li>
          <NavLink end to="/ProductCategory">
            เสื้อผ้า
          </NavLink>
        </li>
        <li>
          <NavLink end to="/">
            กระเป๋า
          </NavLink>
        </li>
        <li>
          <NavLink end to="/">
            รองเท้า
          </NavLink>
        </li>
        <li>
          <NavLink end to="/">
            เครื่องสำอาง
          </NavLink>
        </li>
        <li>
          <NavLink end to="/">
            วิตามิน อาหารเสริม
          </NavLink>
        </li>
        <li>
          <NavLink end to="/">
            เครื่องประดับ อัญมณี
          </NavLink>
        </li>
        <li>
          <NavLink end to="/">
            นาฬิกา
          </NavLink>
        </li>
        <li>
          <NavLink end to="/">
            โทรศัพท์มือถือ
          </NavLink>
        </li>
        <li>
          <NavLink end to="/">
            อุปกรณ์ไอที
          </NavLink>
        </li>
        <li>
          <NavLink end to="/">
            หนังสือ นิตยสาร
          </NavLink>
        </li>
        <li>
          <NavLink end to="/">
            เฟอร์นิเจอร์ ของแต่งบ้าน
          </NavLink>
        </li>
        <li>
          <NavLink end to="/">
            ของเล่น
          </NavLink>
        </li>
        <li>
          <NavLink end to="/">
            เครื่องใช้ไฟฟ้า
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default CategoryList;
