import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './category/CategoryList';
import { AuthContext } from '../contexts/AuthContext';

function NavBar() {
  const { customer } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navbar_left">
        <div className="dropdown">
          <button className="dropbtn">
            <i class="fa-solid fa-list fa-lg"></i> หมวดหมู่สินค้า
          </button>
          <div class="dropdown-content">
            <CategoryList />
          </div>
        </div>
      </div>
      <div className="navbar_right">
        <div className="item">
          <Link end to="/HomePage">
            <i class="fa-solid fa-house fa-lg"></i> หน้าแรก
          </Link>
        </div>
        <div className="item">
          <Link end to="/HowToOrderPage">
            <i class="fa-solid fa-shop fa-lg"></i> วิธีการสั่งซื้อ
          </Link>
        </div>
        <div className="item">
          <Link end to="/PaymentMethodPage">
            <i class="fa-regular fa-credit-card fa-lg"></i> วิธีการชำระเงิน
          </Link>
        </div>

        <div className="item">
          {customer ? null : (
            <Link end to="/Register">
              <i class="fa-solid fa-registered fa-lg"></i> ลงทะเบียน
            </Link>
          )}
        </div>
        <div className="item">
          {customer ? null : (
            <Link end to="/Login">
              <i class="fa-solid fa-user-large fa-lg"></i> เข้าสู่ระบบ
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
