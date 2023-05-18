import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function NavbarCustomer() {
  const { customer, logout } = useContext(AuthContext);

  return (
    <>
      <div className="customer_list">
        <h5>จัดการบัญชี</h5>
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
        </ul>
        <h5>การสั่งซื้อสินค้า</h5>
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
          <li>
            <button type="button" onClick={logout}>
              ออกจากระบบ
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavbarCustomer;
