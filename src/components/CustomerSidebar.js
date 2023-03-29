import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import UserItem from './UserItem';
import defaultUserPicture from '../assets/images/userpicture.png';
import NavbarCustomer from './NavbarCustomer';
import axios from '../config/axios';

function CustomerSidebar() {
  const { customer } = useContext(AuthContext);
  const [userPicture, setUserPicture] = useState(null);
  const navigate = useNavigate();

  const HandleOnClickSaveUserPicture = async () => {
    try {
      const formData = new FormData();
      formData.append('userPicture', userPicture);
      await axios.patch(`/customers/profilepic/${customer.id}`, formData);
      setUserPicture(null);
      navigate(`/customer/profile/${customer.id}`);
    } catch (err) {}
  };

  const HandleOnClickEditUserPicture = () => {
    document.getElementById('editUserPicture').addEventListener('click', () => {
      document.getElementById('selectUserPicture').click();
    });
  };

  return (
    <div className="customer_main_content_left">
      <div className="customer_main_content_left_top">
        <div className="customer_main_content_left_top_left">
          <Link to={`/customer/profile/${customer.id}`}>
            <UserItem
              size="40"
              src={customer.userPicture || defaultUserPicture}
            />
          </Link>
        </div>
        <div className="customer_main_content_left_top_right">
          <Link to={`/customer/profile/${customer.id}`}>
            {customer.username}
          </Link>
          <div>
            <button
              type="button"
              id="editUserPicture"
              onClick={HandleOnClickEditUserPicture}
            >
              แก้ไขรูป Profile
            </button>
            <input
              type="file"
              id="selectUserPicture"
              onChange={(event) => {
                if (event.target.files[0]) {
                  setUserPicture(event.target.files[0]);
                }
              }}
            />
          </div>
          <button type="button" onClick={HandleOnClickSaveUserPicture}>
            บันทึกรูป
          </button>
        </div>
      </div>
      <div className="customer_main_content_left_buttom">
        <NavbarCustomer />
      </div>
    </div>
  );
}

export default CustomerSidebar;
