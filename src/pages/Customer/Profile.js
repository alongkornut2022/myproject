import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ErrorContext } from '../../contexts/ErrorContext';
import axios from '../../config/axios';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { customer } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

  const navigate = useNavigate();

  const focusUsername = useRef();
  const focusEmail = useRef();
  const focusPhoneNumber = useRef();

  const [username, setUsername] = useState(`${customer.username}`);
  const [email, setEmail] = useState(`${customer.email}`);
  const [phoneNumber, setPhoneNumber] = useState(`${customer.phoneNumber}`);
  const [gender, setGender] = useState(`${customer.gender}`);
  const [birthDate, setBirthDate] = useState(`${customer.birthDate}`);

  const [editusername, setEditUsername] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPhoneNumber, setEditPhoneNumber] = useState(false);

  const onChangeUsername = (event) => setUsername(event.target.value);
  const onChangeEmail = (event) => setEmail(event.target.value);
  const onChangePhoneNumber = (event) => setPhoneNumber(event.target.value);

  const focusButtonUsername = () => {
    // document.getElementById('buttonUsername').addEventListener('click', () => {
    //   document.getElementById('textUsername').focus();
    // });
    focusUsername.current.focus();
  };

  const focusButtonEmail = () => {
    // document.getElementById('buttonEmail').addEventListener('click', () => {
    //   document.getElementById('textEmail').focus();
    // });
    focusEmail.current.focus();
  };

  const focusButtonPhoneNumber = () => {
    // document
    //   .getElementById('buttonPhoneNumber')
    //   .addEventListener('click', () => {
    //     document.getElementById('textPhoneNumber').focus();
    //   });
    focusPhoneNumber.current.focus();
  };

  const handleClickEditUsename = async (event) => {
    try {
      event.preventDefault();
      setEditUsername(true);
      focusButtonUsername();
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

  const handleClickGender = async (event) => {
    setGender(event.target.value);
  };

  const handleSubmitUpdate = async (event) => {
    try {
      event.preventDefault();
      await axios.patch(`customers/${customer.id}`, {
        username,
        email,
        phoneNumber,
        gender,
        birthDate,
      });
      navigate(`/customer/profile/${customer.id}`);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <div className="customer_main_content_right_top">
        <h3>ข้อมูลส่วนตัว</h3>
      </div>

      <div className="customer_main_content_right_middle">
        <div className="customer_main_content_right_middle_left">
          <form onSubmit={handleSubmitUpdate}>
            <div className="customer_inner_content">
              <div className="item1">
                <label for="username">ชื่อผู้ใช้</label>
              </div>
              <div className="item2">
                <input
                  type="text"
                  ref={focusUsername}
                  // id="textUsername"
                  value={username}
                  onChange={editusername ? onChangeUsername : ''}
                />
              </div>
              <div className="item4">
                <button
                  type="button"
                  // id="buttonUsername"
                  onClick={handleClickEditUsename}
                >
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
                  // id="textEmail"
                  value={email}
                  onChange={editEmail ? onChangeEmail : ''}
                />
              </div>
              <div className="item4">
                <button
                  type="button"
                  // id="buttonEmail"
                  onClick={handleClickEditEmail}
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
                  ref={focusPhoneNumber}
                  // id="textPhoneNumber"
                  value={phoneNumber}
                  onChange={editPhoneNumber ? onChangePhoneNumber : ''}
                />
              </div>
              <div className="item4">
                <button
                  type="button"
                  // id="buttonPhoneNumber"
                  onClick={handleClickEditPhoneNumber}
                >
                  แก้ไข
                </button>
              </div>
            </div>

            <div className="customer_inner_content">
              <div className="item1">
                <label for="gender">เพศ</label>
              </div>
              <div className="item3">
                <div className="item3_1">
                  <div>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="MALE"
                      onClick={handleClickGender}
                      checked={gender === 'MALE' ? 'checked' : ''}
                    />
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="FEMALE"
                      onClick={handleClickGender}
                      checked={gender === 'FEMALE' ? 'checked' : ''}
                    />
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="other"
                      name="gender"
                      value="OTHER"
                      onClick={handleClickGender}
                      checked={gender === 'OTHER' ? 'checked' : ''}
                    />
                  </div>
                </div>
                <div className="item3_2">
                  <label for="MALE">ชาย</label>
                  <label for="FEMALE">หญิง </label>
                  <label for="OTHER">อื่น ๆ</label>
                </div>
              </div>
            </div>

            <div className="customer_inner_content">
              <div className="item1">
                <label for="birthday">วัน/เดือน/ปี เกิด</label>
              </div>
              <div className="item2">
                <input
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  value={birthDate}
                  onChange={(event) => setBirthDate(event.target.value)}
                />
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

export default Profile;
