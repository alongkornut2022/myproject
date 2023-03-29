import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ErrorContext } from '../contexts/ErrorContext';
import { Link } from 'react-router-dom';

function Login() {
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

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

  return (
    <div className="home_main_content">
      <div className="register_title">
        <h3>กรุณาเข้าสู่ระบบ</h3>
      </div>
      <div className="register_main_content">
        <form onSubmit={handleSubmitLogin}>
          <div className="login_main_content_top">
            <div className="login_inner_content_left">
              <div className="item1">
                <label for="Email or Phone Number">Email or Phone Number</label>
                <input
                  type="text"
                  placeholder="อีเมล์ หรือ หมายเลขโทรศัพท์"
                  value={emailOrPhoneNumber}
                  onChange={(event) =>
                    setEmailOrPhoneNumber(event.target.value)
                  }
                />
              </div>
              <div className="item2">
                <label for="password">Password</label>
                <input
                  type="text"
                  placeholder="รหัสผ่าน"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="item3">
                <Link end to="/Login">
                  ลืมรหัสผ่าน
                </Link>
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
              <button type="reset">ยกเลิก</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
