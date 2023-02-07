import React from 'react';
import buttonSearch from '../images/download.png';
import addtocart from '../images/cart.jpg';
import UserItemCustomer from './UserItemCustomer';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="header">
        <div className="header_left">
          <NavLink end to="/HomePage">
            Logo
          </NavLink>
        </div>
        <div className="header_middle">
          <div className="dropdown_product_category">
            <form>
              <select>
                <option value="">หมวดหมู่ทั้งหมด</option>
                <option value="">เสื้อผ้า</option>
                <option value="">กระเป๋า</option>
                <option value="">รองเท้า</option>
                <option value="">เครื่องสำอาง</option>
                <option value="">วิตามิน อาหารเสริม</option>
                <option value="">เครื่องประดับ อัญมณี</option>
                <option value="">นาฬิกา</option>
                <option value="">โทรศัพท์มือถือ</option>
                <option value="">อุปกรณ์ไอที</option>
                <option value="">หนังสือ นิตยสาร</option>
                <option value="">เฟอร์นิเจอร์ ของแต่งบ้าน</option>
                <option value="">ของเล่น</option>
                <option value="">เครื่องใช้ไฟฟ้า</option>
              </select>
            </form>
          </div>
          <div className="searchbar_product">
            <form>
              <input
                type="text"
                name="form_searchproduct"
                placeholder="ค้นหาสินค้าที่ต้องการ"
                // value={}
              />
            </form>
          </div>
          <div className="button_search">
            <form>
              <buton type="submit">
                <img src={buttonSearch} />
              </buton>
            </form>
          </div>
        </div>
        <div className="header_right">
          <div className="header_right_addtocart">
            <NavLink end to="/AddToCart">
              <buttom type="submit">
                <img src={addtocart} />
              </buttom>
            </NavLink>
          </div>
          <div className="header_right_useritem">
            <UserItemCustomer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
