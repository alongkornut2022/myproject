import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function NavbarCustomerMobile() {
  const { customer, logout } = useContext(AuthContext);
  return (
    <>
      <div className="customer_list">
        <div className="customer_list_mobile">
          <div className="customer_list_mobile_left">
            <div className="dropdown">
              <button>
                <i class="fa-solid fa-list"></i> จัดการบัญชี
              </button>
              <div class="dropdown-content">
                <ul>
                  <li>
                    <NavLink end to={`/customer/profile/${customer.id}`}>
                      ข้อมูลส่วนตัว
                    </NavLink>
                  </li>
                  <li>
                    <NavLink end to={`/customer/PasswordEdit/${customer.id}`}>
                      เปลี่ยนรหัสผ่าน
                    </NavLink>
                  </li>
                  <li>
                    <NavLink end to={`/customer/AddressBook/${customer.id}`}>
                      ที่อยู่รับสินค้า
                    </NavLink>
                  </li>
                  <li>
                    <button type="button" onClick={logout}>
                      ออกจากระบบ
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="customer_list_mobile_right">
            <div className="dropdown">
              <button>
                <i class="fa-solid fa-list"></i> การสั่งซื้อสินค้า
              </button>

              <div class="dropdown-content">
                <ul>
                  <li>
                    <NavLink end to={`/customer/cart/${customer.id}`}>
                      ตะกร้าสินค้า
                    </NavLink>
                  </li>
                  <li>
                    <NavLink end to={`/customer/purchase/${customer.id}`}>
                      การสั่งซื้อของฉัน
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarCustomerMobile;
