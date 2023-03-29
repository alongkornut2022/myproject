import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ErrorContext } from '../../contexts/ErrorContext';
import axios from '../../config/axios';
import { Link, useNavigate } from 'react-router-dom';

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const { customer, logout } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);
  const navigate = useNavigate();

  const handleSubmitPasswordEdit = async (event) => {
    try {
      event.preventDefault();
      await axios.patch(`customers/password/${customer.id}`, {
        oldPassword,
        newPassword,
        confirmNewPassword,
      });
      logout();
      navigate('/login');
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <div className="customer_main_content_right_top">
        <h3>ตั้งค่ารหัสผ่านใหม่</h3>
      </div>

      <div className="customer_main_content_right_middle">
        <form onSubmit={handleSubmitPasswordEdit}>
          <div className="customer_inner_content">
            <div className="item1">
              <label for="oldPassword">รหัสผ่านปัจจุบัน</label>
            </div>
            <div className="item2">
              <input
                type="text"
                value={oldPassword}
                onChange={(event) => setOldPassword(event.target.value)}
              />
            </div>
            <div className="item4">
              <Link end to="/Login">
                ลืมรหัสผ่าน
              </Link>
            </div>
          </div>

          <div className="customer_inner_content">
            <div className="item1">
              <label for="newPassword">รหัสผ่านใหม่</label>
            </div>
            <div className="item2">
              <input
                type="text"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
              />
            </div>
          </div>

          <div className="customer_inner_content">
            <div className="item1">
              <label for="confirmNewPassword">ยืนยันรหัสผ่านใหม่</label>
            </div>
            <div className="item2">
              <input
                type="text"
                value={confirmNewPassword}
                onChange={(event) => setConfirmNewPassword(event.target.value)}
              />
            </div>
          </div>

          <div className="customer_inner_content_submit">
            <input type="submit" value="บันทึก" />
          </div>
        </form>
      </div>
    </>
  );
}

export default ChangePassword;
