import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ErrorContext } from '../contexts/ErrorContext';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { register } = useContext(AuthContext);
  const { setError, setTrigger } = useContext(ErrorContext);

  const handleSubmitRegister = async (event) => {
    try {
      event.preventDefault();
      await register({
        username,
        email,
        phoneNumber,
        password,
        confirmPassword,
      });
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="home_main_content">
      <div className="register_title">
        <h3>สมัครสมาชิกใหม่</h3>
      </div>
      <div className="register_main_content">
        <form onSubmit={handleSubmitRegister}>
          <div className="register_main_content_top">
            <div className="register_inner_content">
              <div className="item1">
                <label for="username">Username</label>
                <input
                  type="text"
                  placeholder="ชื่อผู้ใช้"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
            </div>

            <div className="register_inner_content">
              <div className="item2">
                <label for="email">Email</label>
                <input
                  type="text"
                  placeholder="อีเมล์"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="item3">
                <label for="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  placeholder="หมายเลขโทรศัพท์"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                />
              </div>
            </div>

            <div className="register_inner_content">
              <div className="item4">
                <label for="password">Password</label>
                <input
                  type="text"
                  placeholder="รหัสผ่าน"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <div className="item4_1">
                  8 ตัวไป มีตัวเลข ตัวอักษร และสัญลักษณ์
                </div>
              </div>
              <div className="item5">
                <label for="Confirm password">Confirm Password</label>
                <input
                  type="text"
                  placeholder="ยืนยันรหัสผ่าน"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="register_main_content_buttom">
            <div>
              <button type="submit">สมัครสมาชิก</button>
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

export default Register;
