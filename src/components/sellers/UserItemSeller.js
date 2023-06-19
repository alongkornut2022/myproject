import { useContext } from 'react';
import { AuthSellerContext } from '../../contexts/AuthSellerContext';
import { Link } from 'react-router-dom';
import UserItem from '../UserItem';
import defaultUserPicture from '../../assets/images/userpicture.png';

function UserItemSeller() {
  const { seller, logoutSeller } = useContext(AuthSellerContext);
  return (
    <div className="useritem">
      <div className="dropdown">
        <button className="dropbtn">
          <UserItem
            size="20"
            src={seller.shopPicture || defaultUserPicture}
            username={seller.shopName}
          />

          <div class="dropdown-content">
            <div className="useritem_dropdown">
              <div className="item1">
                <Link end to={`/seller/profile/${seller.id}`}>
                  บัญชีผู้ขาย
                </Link>
              </div>
              <div className="item2">
                <Link end to={`/seller/order/${seller.id}`}>
                  คำสั่งซื่้อ
                </Link>
              </div>
              <div className="item2">
                <Link end to={`/seller/productmain/${seller.id}`}>
                  รายการสินค้า
                </Link>
              </div>
              <div className="item3">
                <button type="button" onClick={logoutSeller}>
                  ออกจากระบบ
                </button>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default UserItemSeller;
