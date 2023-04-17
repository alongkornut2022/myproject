import { useContext, useState } from 'react';
import buttonSearch from '../images/download.png';
import addtocart from '../images/cart.jpg';
import UserItemCustomer from './UserItemCustomer';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function Header() {
  const { customer } = useContext(AuthContext);

  const [keyword, setKeyword] = useState();

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
            <input
              type="text"
              placeholder="ค้นหาสินค้า"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
            />
          </div>
          <div className="button_search">
            <Link end to={`Product/search/${keyword}`}>
              <img src={buttonSearch} />
            </Link>
          </div>
        </div>
        <div className="header_right">
          <div className="header_right_addtocart">
            <NavLink end to="/AddToCart">
              <img src={addtocart} />
            </NavLink>
          </div>
          <div className="header_right_useritem">
            {customer ? <UserItemCustomer /> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
