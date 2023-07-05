import { useContext, useRef, useState } from 'react';
import { AuthSellerContext } from '../../contexts/AuthSellerContext';
import { ErrorContext } from '../../contexts/ErrorContext';
import axios from '../../config/axiosSeller';

function SellerProfile() {
  const { seller } = useContext(AuthSellerContext);
  const { setError } = useContext(ErrorContext);

  const focusShopName = useRef();
  const focusEmail = useRef();
  const focusPhoneNumber = useRef();

  const [shopName, setShopName] = useState(`${seller.shopName}`);
  const [email, setEmail] = useState(`${seller.email}`);
  const [phoneNumber, setPhoneNumber] = useState(`${seller.phoneNumber}`);

  const [editShopName, setEditShopName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPhoneNumber, setEditPhoneNumber] = useState(false);

  const handleSubmitUpdate = async (event) => {
    try {
      event.preventDefault();
      await axios.patch(`sellers/${seller.id}`, {
        shopName,
        email,
        phoneNumber,
      });
      document.location.reload();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleOnClickCancle = () => {
    setShopName(`${seller.shopName}`);
    setEmail(`${seller.email}`);
    setPhoneNumber(`${seller.phoneNumber}`);
  };

  return (
    <>
      <div className="customer_main_content_right_top">
        <h3>ข้อมูลร้านค้า</h3>
      </div>

      <div className="customer_main_content_right_middle">
        <div className="customer_main_content_right_middle_left">
          <form onSubmit={handleSubmitUpdate} onReset={handleOnClickCancle}>
            <div>
              <div className="customer_inner_content">
                <div className="item1">
                  <label for="username">ชื่อร้านค้า</label>
                </div>
                <div className="item2">
                  <input
                    type="text"
                    maxlength="50"
                    ref={focusShopName}
                    value={shopName}
                    onChange={
                      editShopName
                        ? (event) => setShopName(event.target.value)
                        : ''
                    }
                    required="required"
                  />
                </div>
                <div className="item4">
                  <button
                    type="button"
                    onClick={() => {
                      focusShopName.current.focus();
                      setEditShopName(true);
                    }}
                  >
                    แก้ไข
                  </button>
                </div>
              </div>

              <div className="customer_inner_content_validate">
                <div className="item1"></div>
                <div className="register_inner_content_validate_profile">
                  (ไม่เกิน 50 ตัว)
                </div>
              </div>
            </div>

            <div className="customer_inner_content">
              <div className="item1">
                <label for="email">อีเมล์</label>
              </div>
              <div className="item2">
                <input
                  type="text"
                  maxlength="50"
                  ref={focusEmail}
                  value={email}
                  onChange={
                    editEmail ? (event) => setEmail(event.target.value) : ''
                  }
                  required="required"
                />
              </div>
              <div className="item4">
                <button
                  type="button"
                  onClick={() => {
                    focusEmail.current.focus();
                    setEditEmail(true);
                  }}
                >
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
                  minlength="10"
                  maxlength="10"
                  ref={focusPhoneNumber}
                  value={phoneNumber}
                  onChange={
                    editPhoneNumber
                      ? (event) =>
                          setPhoneNumber(
                            event.target.value.replace(/[^\d]/, '')
                          )
                      : ''
                  }
                  required="required"
                />
              </div>
              <div className="item4">
                <button
                  type="button"
                  onClick={() => {
                    focusPhoneNumber.current.focus();
                    setEditPhoneNumber(true);
                  }}
                >
                  แก้ไข
                </button>
              </div>
            </div>

            <div className="customer_inner_content_submit">
              <input type="submit" value="บันทึก" />
              <input type="reset" value="ยกเลิก" />
            </div>
          </form>
        </div>
        <div className="customer_main_content_right_middle_right"></div>
      </div>
    </>
  );
}

export default SellerProfile;
