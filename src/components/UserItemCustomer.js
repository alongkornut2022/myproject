import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import UserItem from './UserItem';
import defaultUserPicture from '../assets/images/userpicture.png';
import NavbarCustomer from './NavbarCustomer';

function UserItemCustomer() {
  const { customer } = useContext(AuthContext);
  return (
    <div className="useritem">
      <Link to={`/customer/profile/${customer.id}`}>
        <UserItem
          size="28"
          src={customer.userPicture || defaultUserPicture}
          username={customer.username}
        />
      </Link>
      <div className="dropdown">
        <button className="dropbtn">
          <div class="dropdown-content">
            <NavbarCustomer />
          </div>
        </button>
      </div>
    </div>
  );
}

export default UserItemCustomer;
