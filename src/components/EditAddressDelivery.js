import { useContext, useState } from 'react';
import { ErrorContext } from '../contexts/ErrorContext';
import axios from '../config/axios';
import { AuthContext } from '../contexts/AuthContext';

function EditAddressDelivery({ customerAddress, closeModal, fetchData }) {
  const [firstName, setFirstName] = useState(`${customerAddress.firstName}`);
  const [lastName, setLastName] = useState(`${customerAddress.lastName}`);
  const [addressDetail, setAddressDetail] = useState(
    `${customerAddress.addressDetail}`
  );
  const [district, setDistrict] = useState(`${customerAddress.district}`);
  const [province, setProvince] = useState(`${customerAddress.province}`);
  const [postcode, setPostcode] = useState(`${customerAddress.postcode}`);
  const [phoneNumber, setPhoneNumber] = useState(
    `${customerAddress.phoneNumber}`
  );

  const { customer } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

  const handleSubmitEditAddressDelivery = async (e) => {
    try {
      e.preventDefault();
      // validate input first

      // end validate
      await axios.patch(
        `/address/customer/${customerAddress.id}/${customer.id}`,
        {
          firstName,
          lastName,
          addressDetail,
          district,
          province,
          postcode,
          phoneNumber,
        }
      );
      closeModal();
      await fetchData();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitEditAddressDelivery}>
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

export default EditAddressDelivery;
