import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';
import { AuthContext } from '../contexts/AuthContext';

function NavBar() {
  const { customer } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navbar_left">
        <div className="dropdown">
          <button className="dropbtn">หมวดหมู่สินค้า</button>
          <div class="dropdown-content">
            <CategoryList />
          </div>
        </div>
      </div>
      <div className="navbar_right">
        <div className="item">
          <Link end to="/HomePage">
            หน้าแรก
          </Link>
        </div>
        <div className="item">
          <Link end to="/HowToOrderPage">
            วิธีการสั่งซื้อ
          </Link>
        </div>
        <div className="item">
          <Link end to="/PaymentMethodPage">
            วิธีการชำระเงิน
          </Link>
        </div>

        <div className="item">
          {customer ? null : (
            <Link end to="/Register">
              ลงทะเบียน
            </Link>
          )}
        </div>
        <div className="item">
          {customer ? null : (
            <Link end to="/Login">
              เข้าสู่ระบบ
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
