import { useContext, useState } from 'react';
import { AuthSellerContext } from '../../contexts/AuthSellerContext';
import { ErrorContext } from '../../contexts/ErrorContext';
import axios from '../../config/axiosSeller';
import { Link, useNavigate } from 'react-router-dom';

function SellerChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { seller, logout } = useContext(AuthSellerContext);
  const { setError } = useContext(ErrorContext);
  const navigate = useNavigate();

  const handleSubmitPasswordEdit = async (event) => {
    try {
      event.preventDefault();
      await axios.patch(`sellers/changepassword/${seller.id}`, {
        oldPassword,
        newPassword,
        confirmNewPassword,
      });
      logout();
      navigate('/seller/login');
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleResetPasswordEdit = () => {
    setOldPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
    setShowPassword(false);
  };

  const handleOnClickShowPassword = (event) => {
    if (event.currentTarget.checked) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  return (
    <>
      <div className="customer_main_content_right_top">ตั้งค่ารหัสผ่านใหม่</div>
      <div className="customer_main_content_right_middle">
        <div className="customer_inner_content">
          <div className="item1">รหัสผ่านปัจจุบัน</div>
          <div className="item2">
            <input
              type={showPassword === false ? 'password' : 'text'}
              value={oldPassword}
              onChange={(event) => setOldPassword(event.target.value)}
            />
          </div>
          <div className="item4">
            {/* <Link end to="/Login">
              ลืมรหัสผ่าน
            </Link> */}
          </div>
        </div>

        <div className="customer_inner_content">
          <div className="item1">รหัสผ่านใหม่</div>
          <div className="item2">
            <input
              type={showPassword === false ? 'password' : 'text'}
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
            />
          </div>
        </div>

        <div className="customer_inner_content">
          <div className="item1">ยืนยันรหัสผ่านใหม่</div>
          <div className="item2">
            <input
              type={showPassword === false ? 'password' : 'text'}
              value={confirmNewPassword}
              onChange={(event) => setConfirmNewPassword(event.target.value)}
            />
          </div>
        </div>

        <div className="customer_inner_content">
          <div className="item1"></div>
          <div className="item2_1">
            <input
              type="checkbox"
              checked={showPassword === true ? 'checked' : ''}
              onClick={(event) => handleOnClickShowPassword(event)}
            />
            Show Password
          </div>
        </div>

        <div className="customer_inner_content_submit">
          <button onClick={handleSubmitPasswordEdit}>บันทึก</button>
          <button onClick={handleResetPasswordEdit}>ยกเลิก</button>
        </div>
      </div>
    </>
  );
}

export default SellerChangePassword;
