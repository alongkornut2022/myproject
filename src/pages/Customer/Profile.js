import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ErrorContext } from '../../contexts/ErrorContext';
import axios from '../../config/axios';

function Profile() {
  const { customer } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

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
      document.location.reload();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleOnClickCancle = () => {
    setUsername(`${customer.username}`);
    setEmail(`${customer.email}`);
    setPhoneNumber(`${customer.phoneNumber}`);
    setGender(`${customer.gender}`);
    setBirthDate(`${customer.birthDate}`);
  };

  return (
    <>
      <div className="customer_main_content_right_top">ข้อมูลส่วนตัว</div>

      <div className="customer_main_content_right_middle">
        <div className="customer_main_content_right_middle_left">
          <div>
            <div className="customer_inner_content">
              <div className="item1">ชื่อผู้ใช้</div>
              <div className="item2">
                <input
                  type="text"
                  minlength="8"
                  maxlength="30"
                  ref={focusUsername}
                  value={username}
                  onChange={
                    editusername
                      ? (event) =>
                          setUsername(
                            event.target.value.replace(/^[\W0-9]/, '')
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
                    focusUsername.current.focus();
                    setEditUsername(true);
                  }}
                >
                  แก้ไข
                </button>
              </div>
            </div>
            <div className="customer_inner_content_validate">
              <div className="item1"></div>
              <div className="register_inner_content_validate_profile">
                (ชื่อผู้ใช้ 8-30 ตัว ขึ้นต้นด้วยตัวอักษร)
              </div>
            </div>
          </div>

          <div className="customer_inner_content">
            <div className="item1">อีเมล์</div>
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
            <div className="item1">หมายเลขโทรศัพท์</div>
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
                        setPhoneNumber(event.target.value.replace(/[^\d]/, ''))
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

          <div className="customer_inner_content">
            <div className="item1">เพศ</div>
            <div className="item3">
              <div className="item3_1">
                <div>
                  <input
                    type="radio"
                    value="MALE"
                    onClick={(event) => setGender(event.target.value)}
                    checked={gender === 'MALE' ? 'checked' : ''}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    value="FEMALE"
                    onClick={(event) => setGender(event.target.value)}
                    checked={gender === 'FEMALE' ? 'checked' : ''}
                  />
                </div>
                <div>
                  <input
                    type="radio"
                    value="OTHER"
                    onClick={(event) => setGender(event.target.value)}
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
            <div className="item1">วัน/เดือน/ปี เกิด</div>
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
            <button onClick={handleSubmitUpdate}> บันทึก </button>

            <button onClick={handleOnClickCancle}>ยกเลิก</button>
          </div>
        </div>
        <div className="customer_main_content_right_middle_right"></div>
      </div>
    </>
  );
}

export default Profile;
