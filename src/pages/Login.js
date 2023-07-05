import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ErrorContext } from '../contexts/ErrorContext';
import { Link } from 'react-router-dom';

function Login() {
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

  const handleSubmitLogin = async (event) => {
    try {
      event.preventDefault();
      await login(emailOrPhoneNumber, password);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleOnClickShowPassword = (event) => {
    if (event.currentTarget.checked) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  const handleOnClickCancle = () => {
    setEmailOrPhoneNumber('');
    setPassword('');
    setShowPassword(false);
  };

  return (
    <div className="home_main_content">
      <div className="login_title">เข้าสู่ระบบ : ผู้ซื้อ </div>
      <div className="login_main_content">
        <form onSubmit={handleSubmitLogin}>
          <div className="login_main_content_top">
            <div className="login_inner_content_left">
              <div className="login_inner_content_left_top">
                <div>Email or Phone Number</div>
                <input
                  type="text"
                  placeholder="อีเมล์ หรือ หมายเลขโทรศัพท์"
                  maxlength="50"
                  value={emailOrPhoneNumber}
                  onChange={(event) =>
                    setEmailOrPhoneNumber(event.target.value)
                  }
                  required="required"
                />
              </div>
              <div className="login_inner_content_left_middle">
                <div className="login_inner_content_left_middle_label">
                  Password
                </div>
                <div className="login_inner_content_left_middle_input">
                  <input
                    type={showPassword === false ? 'password' : 'text'}
                    placeholder="รหัสผ่าน"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required="required"
                  />
                </div>
              </div>
              <div className="login_inner_content_left_buttom">
                <div className="login_inner_content_left_checkbox">
                  <div className="login_inner_content_left_checkbox_input">
                    <input
                      type="checkbox"
                      onClick={(event) => handleOnClickShowPassword(event)}
                    />
                  </div>

                  <div className="login_inner_content_left_checkbox_label">
                    Show Password
                  </div>
                </div>
                <div className="login_inner_content_left_forgetpassword">
                  {/* <Link end to="/Login">
                    ลืมรหัสผ่าน
                  </Link> */}
                </div>
              </div>
            </div>

            <div className="login_inner_content_right">
              <Link end to="/Register">
                สมัครสมาชิกใหม่ ลงทะเบียนที่นี้
              </Link>
            </div>
          </div>

          <div className="login_main_content_bottom">
            <div>
              <button type="submit">เข้าสู่ระบบ</button>
            </div>
            <div>
              <button type="button" onClick={handleOnClickCancle}>
                ยกเลิก
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
