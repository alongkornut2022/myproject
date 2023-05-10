import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import UserItem from './UserItem';
import defaultUserPicture from '../assets/images/userpicture.png';
import NavbarCustomer from './NavbarCustomer';
import axios from '../config/axios';
import Spinner from './Spinner';

function CustomerSidebar() {
  const { customer } = useContext(AuthContext);
  const [userPicture, setUserPicture] = useState(null);
  const [loading, setLoading] = useState(true);
  const usePic = useRef();

  const HandleOnClickSaveUserPicture = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('userPicture', userPicture);
      await axios.patch(`/customers/profilepic/${customer.id}`, formData);
      setUserPicture(null);
      document.location.reload();
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const HandleOnClickEditUserPicture = () => {
    usePic.current.click();
  };

  useEffect(() => {
    HandleOnClickSaveUserPicture();
  }, [userPicture]);

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
          <Spinner loading={loading} />
          <div>
            <button type="button" onClick={HandleOnClickEditUserPicture}>
              Edit Image
            </button>
            <input
              type="file"
              ref={usePic}
              onChange={(event) => {
                if (event.target.files[0]) {
                  setUserPicture(event.target.files[0]);
                }
              }}
            />
          </div>
        </div>
      </div>

      <div className="customer_main_content_left_buttom">
        <NavbarCustomer />
      </div>
    </div>
  );
}

export default CustomerSidebar;
