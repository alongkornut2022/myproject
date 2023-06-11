import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import UserItem from './UserItem';
import defaultUserPicture from '../assets/images/userpicture.png';
// import NavbarCustomer from './NavbarCustomer';

function UserItemCustomer() {
  const { customer, logout } = useContext(AuthContext);
  return (
    <div className="useritem">
      <div className="dropdown">
        <button className="dropbtn">
          <div className="useritem_dropbtn">
            <UserItem
              size="28"
              src={customer.userPicture || defaultUserPicture}
              username={customer.username}
            />
          </div>
          <div class="dropdown-content">
            <div className="useritem_dropdown">
              <div className="item1">
                <Link end to={`/customer/profile/${customer.id}`}>
                  บัญชีของฉัน
                </Link>
              </div>
              <div className="item2">
                <Link end to={`/customer/purchase/${customer.id}`}>
                  การสั่งซื่้อของฉัน
                </Link>
              </div>
              <div className="item3">
                <button type="button" onClick={logout}>
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

export default UserItemCustomer;
