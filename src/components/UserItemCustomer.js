import React from 'react';
import NavbarCustomer from './NavbarCustomer';

function UserItemCustomer() {
  return (
    <div className="useritem">
      <div className="dropdown">
        <button className="dropbtn">
          <div className="useritem_image">
            <img src="https://picsum.photos/40" />
          </div>
          <div className="useritem_username">
            <h4>Username</h4>
          </div>
        </button>
        <div class="dropdown-content">
          <NavbarCustomer />
        </div>
      </div>
    </div>
  );
}

export default UserItemCustomer;
