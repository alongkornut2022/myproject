import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthSellerContext } from '../../contexts/AuthSellerContext';

function NavbarSellerMobile() {
  const { seller, logoutSeller } = useContext(AuthSellerContext);

  return (
    <>
      <div className="customer_list">
        <div className="customer_list_mobile">
          <div className="customer_list_mobile_left">
            <div className="dropdown">
              <button>
                <i class="fa-solid fa-list"></i> บัญชีผู้ขาย
              </button>
              <div class="dropdown-content">
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
                  <li>
                    <button type="button" onClick={logoutSeller}>
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
                <i class="fa-solid fa-list"></i> คำสั่งซื้อ
              </button>

              <div class="dropdown-content">
                <ul>
                  <li>
                    <NavLink end to={`/seller/order/${seller.id}`}>
                      คำสั่งซื้อของฉัน
                    </NavLink>
                  </li>
                  <li>
                    <NavLink end to={`/seller/delivery/${seller.id}`}>
                      จัดส่งสินค้า
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="customer_list_mobile_right">
            <div className="dropdown">
              <button>
                <i class="fa-solid fa-list"></i> สินค้า
              </button>

              <div class="dropdown-content-mobile">
                <ul>
                  <li>
                    <NavLink end to={`/seller/productmain/${seller.id}`}>
                      สินค้าของฉัน
                    </NavLink>
                  </li>
                  <li>
                    <NavLink end to={`/seller/productadd/${seller.id}`}>
                      เพิ่มสินค้า
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

export default NavbarSellerMobile;
