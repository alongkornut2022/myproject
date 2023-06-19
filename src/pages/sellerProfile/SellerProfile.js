import { useContext, useRef, useState } from 'react';
import { AuthSellerContext } from '../../contexts/AuthSellerContext';
import { ErrorContext } from '../../contexts/ErrorContext';
import axios from '../../config/axiosSeller';
import { useNavigate } from 'react-router-dom';

function SellerProfile() {
  const { seller } = useContext(AuthSellerContext);
  const { setError } = useContext(ErrorContext);

  const navigate = useNavigate();

  const focusShopName = useRef();
  const focusEmail = useRef();
  const focusPhoneNumber = useRef();

  const [shopName, setShopName] = useState(`${seller.shopName}`);
  const [email, setEmail] = useState(`${seller.email}`);
  const [phoneNumber, setPhoneNumber] = useState(`${seller.phoneNumber}`);

  const [editShopName, setEditShopName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPhoneNumber, setEditPhoneNumber] = useState(false);

  const onChangeShopName = (event) => setShopName(event.target.value);
  const onChangeEmail = (event) => setEmail(event.target.value);
  const onChangePhoneNumber = (event) => setPhoneNumber(event.target.value);

  const focusButtonShopName = () => {
    focusShopName.current.focus();
  };

  const focusButtonEmail = () => {
    focusEmail.current.focus();
  };

  const focusButtonPhoneNumber = () => {
    focusPhoneNumber.current.focus();
  };

  const handleClickEditShopName = async (event) => {
    try {
      event.preventDefault();
      setEditShopName(true);
      focusButtonShopName();
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickEditEmail = async (event) => {
    try {
      event.preventDefault();
      setEditEmail(true);
      focusButtonEmail();
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickEditPhoneNumber = async (event) => {
    try {
      event.preventDefault();
      setEditPhoneNumber(true);
      focusButtonPhoneNumber();
    } catch (err) {}
  };

  const handleSubmitUpdate = async (event) => {
    try {
      event.preventDefault();
      await axios.patch(`sellers/${seller.id}`, {
        shopName,
        email,
        phoneNumber,
      });
      navigate(`/seller/profile/${seller.id}`);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <div className="customer_main_content_right_top">
        <h3>ข้อมูลร้านค้า</h3>
      </div>

      <div className="customer_main_content_right_middle">
        <div className="customer_main_content_right_middle_left">
          <form onSubmit={handleSubmitUpdate}>
            <div className="customer_inner_content">
              <div className="item1">
                <label for="username">ชื่อร้านค้า</label>
              </div>
              <div className="item2">
                <input
                  type="text"
                  ref={focusShopName}
                  value={shopName}
                  onChange={editShopName ? onChangeShopName : ''}
                />
              </div>
              <div className="item4">
                <button type="button" onClick={handleClickEditShopName}>
                  แก้ไข
                </button>
              </div>
            </div>

            <div className="customer_inner_content">
              <div className="item1">
                <label for="email">อีเมล์</label>
              </div>
              <div className="item2">
                <input
                  type="text"
                  ref={focusEmail}
                  value={email}
                  onChange={editEmail ? onChangeEmail : ''}
                />
              </div>
              <div className="item4">
                <button type="button" onClick={handleClickEditEmail}>
                  แก้ไข
                </button>
              </div>
            </div>

            <div className="customer_inner_content">
              <div className="item1">
                <label for="phoneNumber">หมายเลขโทรศัพท์</label>
              </div>
              <div className="item2">
                <input
                  type="text"
                  ref={focusPhoneNumber}
                  value={phoneNumber}
                  onChange={editPhoneNumber ? onChangePhoneNumber : ''}
                />
              </div>
              <div className="item4">
                <button type="button" onClick={handleClickEditPhoneNumber}>
                  แก้ไข
                </button>
              </div>
            </div>

            <div className="customer_inner_content_submit">
              <input type="submit" value="บันทึก" />
            </div>
          </form>
        </div>
        <div className="customer_main_content_right_middle_right"></div>
      </div>
    </>
  );
}

export default SellerProfile;
