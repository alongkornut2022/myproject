import React from 'react';
import AddressDelivery from '../../components/AddressDelivery';
import NavbarCustomer from '../../components/NavbarCustomer';
import UserItem from '../../components/UserItem';

function AddressBook() {
  return (
    <div className="home_main_content">
      <div className="home_main_content_top">
        <div className="customer_main_content_left">
          <div className="customer_main_content_left_top">
            <UserItem />
          </div>
          <div className="customer_main_content_left_buttom">
            <NavbarCustomer />
          </div>
        </div>
        <div className="addressbook_main_content_right">
          <div className="addressbook_main_content_right_top">
            <div>
              <h4>สมุดที่อยู่</h4>
            </div>
            <div>
              <div className="address_delivery_change">
                <button>เพิ่มที่อยู่</button>
              </div>
            </div>
          </div>

          <div className="addressbook_main_content_right_middle">
            <AddressDelivery />
            <AddressDelivery />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressBook;
