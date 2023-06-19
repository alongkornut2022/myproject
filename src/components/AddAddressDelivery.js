import { useContext } from 'react';
import { ErrorContext } from '../contexts/ErrorContext';
import axios from '../config/axios';
import { AuthContext } from '../contexts/AuthContext';

function AddAddressDelivery({
  closeModal,
  fetchData,
  valueInput,
  ClearInputField,
}) {
  const {
    firstName,
    lastName,
    addressDetail,
    district,
    province,
    postcode,
    phoneNumber,
    setFirstName,
    setLastName,
    setAddressDetail,
    setDistrict,
    setProvince,
    setPostcode,
    setPhoneNumber,
  } = valueInput;

  const { customer } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

  const handleSubmitAddAddressDelivery = async (e) => {
    try {
      e.preventDefault();
      // validate input first

      // end validate
      await axios.post(`/address/customer/${customer.id}`, {
        firstName,
        lastName,
        addressDetail,
        district,
        province,
        postcode,
        phoneNumber,
      });
      closeModal();
      ClearInputField();
      await fetchData();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitAddAddressDelivery}>
        <div className="add_delivery">
          <div className="item1">
            <input
              type="text"
              placeholder="ชื่อ"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required="required"
            />
            <input
              type="text"
              placeholder="นามสกุล"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required="required"
            />
          </div>

          <div className="item2">
            <input
              type="text"
              placeholder="หมายเลขโทรศัพท์"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required="required"
            />
          </div>

          <div className="item3">
            <input
              type="text"
              placeholder="ที่อยู่"
              value={addressDetail}
              onChange={(e) => setAddressDetail(e.target.value)}
              required="required"
            />
          </div>

          <div className="item1">
            <input
              type="text"
              placeholder="อำเภอ/เขต"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              required="required"
            />
            <input
              type="text"
              placeholder="จังหวัด"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              required="required"
            />
          </div>
          <div className="item2">
            <input
              type="text"
              placeholder="รหัสไปรษณีย์"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              required="required"
            />
          </div>
          <div className="item4">
            <button type="submit">บันทึก</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddAddressDelivery;
