import { useContext, useState } from 'react';
import { AuthSellerContext } from '../../contexts/AuthSellerContext';
import { ErrorContext } from '../../contexts/ErrorContext';

function SellerRegister() {
  const [shopName, setShopName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { registerSeller } = useContext(AuthSellerContext);
  const { setError } = useContext(ErrorContext);

  const handleSubmitRegister = async (event) => {
    try {
      event.preventDefault();
      await registerSeller({
        shopName,
        email,
        phoneNumber,
        password,
        confirmPassword,
      });
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleResetRegister = () => {
    setShopName('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');
    setConfirmPassword('');
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
    <div className="home_main_content">
      <div className="register_title">สร้างบัญชี : ผู้ขาย</div>
      <div className="register_main_content">
        <div className="register_main_content_top">
          <div className="register_inner_content">
            <div className="item1">
              <div>Shop Name</div>
              <input
                type="text"
                placeholder="ชื่อร้านค้า"
                value={shopName}
                onChange={(event) => setShopName(event.target.value)}
              />
            </div>
          </div>

          <div className="register_inner_content">
            <div className="register_inner_content_email_label">
              <div>Email</div>
              <div className="register_inner_content_email_input">
                <input
                  type="email"
                  placeholder="อีเมล์"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            <div className="register_inner_content_phonenumber">
              <div>Phone Number</div>
              <input
                type="text"
                placeholder="หมายเลขโทรศัพท์"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </div>
          </div>

          <div className="register_inner_content">
            <div className="register_inner_content_password">
              <div>Password</div>
              <div className="register_inner_content_password_input">
                <input
                  type={showPassword === false ? 'password' : 'text'}
                  placeholder="รหัสผ่าน"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="register_inner_content_validate">
                รหัสผ่าน 8 ตัวขึ้นไป มีตัวเลข ตัวอักษร และสัญลักษณ์
              </div>
              <div className="register_inner_content_checkbox">
                <div className="register_inner_content_checkbox_input">
                  <input
                    type="checkbox"
                    checked={showPassword === true ? 'checked' : ''}
                    onClick={(event) => handleOnClickShowPassword(event)}
                  />
                </div>
                <div className="register_inner_content_checkbox_label">
                  Show Password
                </div>
              </div>
            </div>
            <div className="register_inner_content_confirmpassword">
              <label for="Confirm password">Confirm Password</label>
              <input
                type={showPassword === false ? 'password' : 'text'}
                placeholder="ยืนยันรหัสผ่าน"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="register_main_content_buttom">
          <div className="register_main_content_buttom_button">
            <button onClick={handleSubmitRegister}>สร้างบัญชี</button>
          </div>
          <div className="register_main_content_buttom_button">
            <button onClick={handleResetRegister}>ยกเลิก</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerRegister;
