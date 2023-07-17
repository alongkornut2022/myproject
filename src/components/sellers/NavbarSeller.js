import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthSellerContext } from '../../contexts/AuthSellerContext';

function NavbarSeller() {
  const { seller, logoutSeller } = useContext(AuthSellerContext);

  return (
    <>
      <div className="customer_list">
        <h5>บัญชีผู้ขาย</h5>
        <ul>
          <li>
            <NavLink end to={`/seller/profile/${seller.id}`}>
              ข้อมูลร้านค้า
            </NavLink>
          </li>
          <li>
            <NavLink end to={`/seller/passwordEdit/${seller.id}`}>
              เปลี่ยนรหัสผ่าน
            </NavLink>
          </li>
          <li>
            <NavLink end to={`/seller/addressBook/${seller.id}`}>
              ที่อยู่ร้านค้า
            </NavLink>
          </li>
        </ul>
        <h5>คำสั่งซื้อ</h5>
        <ul>
          <li>
            <NavLink end to={`/seller/order/${seller.id}`}>
              คำสั่งซื้อของฉัน
            </NavLink>
          </li>
          {/* <li>
            <NavLink end to={`/seller/delivery/${seller.id}`}>
              จัดส่งสินค้า
            </NavLink>
          </li> */}
        </ul>
        <h5>สินค้า</h5>
        <ul>
          <li>
            <NavLink end to={`/seller/productmain/${seller.id}`}>
              สินค้าของฉัน
            </NavLink>
          </li>
          <li>
            <NavLink end to={`/seller/productadd/${seller.id}`}>
              เพิ่มสินค้าใหม่
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <button type="button" onClick={logoutSeller}>
              ออกจากระบบ
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavbarSeller;
