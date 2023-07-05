import { useContext, useEffect, useState } from 'react';
import { ErrorContext } from '../contexts/ErrorContext';
import axios from '../config/axios';
import { AuthContext } from '../contexts/AuthContext';

function EditAddressDelivery({
  customerAddress,
  closeModal,
  fetchData,
  thaiProvinces,
  thaiAddressId,
}) {
  const [firstName, setFirstName] = useState(`${customerAddress.firstName}`);
  const [lastName, setLastName] = useState(`${customerAddress.lastName}`);
  const [addressDetail, setAddressDetail] = useState(
    `${customerAddress.addressDetail}`
  );
  const [subDistrict, setSubDistrict] = useState(
    `${customerAddress.subDistrict}`
  );
  const [district, setDistrict] = useState(`${customerAddress.district}`);
  const [province, setProvince] = useState(`${customerAddress.province}`);
  const [postcode, setPostcode] = useState(`${customerAddress.postcode}`);
  const [phoneNumber, setPhoneNumber] = useState(
    `${customerAddress.phoneNumber}`
  );

  const { customer } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

  const [thaiAmphures, setThaiAmphures] = useState([]);
  const [thaiTambons, setThaiTambons] = useState([]);
  const [thaiZipCodes, setThaiZipCodes] = useState([]);

  const fetchThaiAmphures = async (provinceId) => {
    try {
      if (provinceId === 'จังหวัด') {
        setThaiAmphures([]);
        setThaiTambons([]);
        setThaiZipCodes([]);
      } else {
        const resThaiAmphures = await axios.get(
          `/thaiaddress/amphures/${provinceId}`
        );
        setThaiAmphures(resThaiAmphures.data.thaiAmphures);
        setThaiTambons([]);
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const fetchThaiTambons = async (amphureId) => {
    try {
      if (amphureId === 'อำเภอ/เขต') {
        setThaiTambons([]);
        setThaiZipCodes([]);
      } else {
        const resThaiTambons = await axios.get(
          `/thaiaddress/tambons/${amphureId}`
        );
        setThaiTambons(resThaiTambons.data.thaiTambons);
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const fetchThaiZipCodes = async (tambonId) => {
    try {
      const resThaiZipCodes = await axios.get(
        `/thaiaddress/zipcodes/${tambonId}`
      );
      setThaiZipCodes(resThaiZipCodes.data.thaiZipCodes);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  useEffect(() => {
    fetchThaiAmphures(thaiAddressId.provinceId);
    fetchThaiTambons(thaiAddressId.amphureId);
    fetchThaiZipCodes(thaiAddressId.tambonId);
  }, [thaiAddressId]);

  const handleSubmitEditAddressDelivery = async (e) => {
    try {
      e.preventDefault();
      if (
        addressDetail === '' ||
        subDistrict === 'ตำบล/แขวง' ||
        district === 'อำเภอ/เขต' ||
        province === 'จังหวัด' ||
        postcode === 'รหัสไปรณีย์' ||
        subDistrict === '' ||
        district === '' ||
        province === '' ||
        postcode === ''
      ) {
        alert('คุณยังกรอก "ที่อยู่" ไม่ครบ');
      } else {
        await axios.patch(
          `/address/customer/${customerAddress.id}/${customer.id}`,
          {
            firstName,
            lastName,
            addressDetail,
            subDistrict,
            district,
            province,
            postcode,
            phoneNumber,
          }
        );
        closeModal();
        await fetchData();
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleOnClickCancle = () => {
    closeModal();
    setFirstName(`${customerAddress.firstName}`);
    setLastName(`${customerAddress.lastName}`);
    setAddressDetail(`${customerAddress.addressDetail}`);
    setSubDistrict(`${customerAddress.subDistrict}`);
    setDistrict(`${customerAddress.district}`);
    setProvince(`${customerAddress.province}`);
    setPostcode(`${customerAddress.postcode}`);
    setPhoneNumber(`${customerAddress.phoneNumber}`);
  };

  return (
    <>
      <form onSubmit={handleSubmitEditAddressDelivery}>
        <div className="add_delivery">
          <div className="item1">
            <input
              type="text"
              placeholder="ชื่อ"
              maxLength="50"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required="required"
            />
            <input
              type="text"
              placeholder="นามสกุล"
              maxLength="50"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required="required"
            />
          </div>

          <div className="item2">
            <input
              type="text"
              placeholder="หมายเลขโทรศัพท์"
              minLength="10"
              maxLength="10"
              value={phoneNumber}
              onChange={(e) =>
                setPhoneNumber(e.target.value.replace(/[^\d]/, ''))
              }
              required="required"
            />
          </div>

          <div className="item3">
            <input
              type="text"
              placeholder="ที่อยู่"
              maxLength="1000"
              value={addressDetail}
              onChange={(e) => setAddressDetail(e.target.value)}
              required="required"
            />
          </div>

          <div className="item1">
            <select
              onChange={(e) => {
                setSubDistrict(e.target.value);
                fetchThaiZipCodes(e.target.value);
              }}
            >
              <option>ตำบล/แขวง</option>
              {thaiTambons
                ? thaiTambons.map((el) => (
                    <option
                      key={el.id}
                      value={el.id}
                      selected={subDistrict === el.nameTh ? 'selected' : ''}
                    >
                      ตำบล/แขวง {el.nameTh}
                    </option>
                  ))
                : ''}
            </select>

            <select
              onChange={(event) => {
                setDistrict(event.target.value);
                fetchThaiTambons(event.target.value);
              }}
            >
              <option>อำเภอ/เขต</option>
              {thaiAmphures
                ? thaiAmphures.map((el) => (
                    <option
                      key={el.id}
                      value={el.id}
                      selected={district === el.nameTh ? 'selected' : ''}
                    >
                      อำเภอ/เขต {el.nameTh}
                    </option>
                  ))
                : ''}
            </select>
          </div>

          <div className="item2">
            <select
              onChange={(e) => {
                setProvince(e.target.value);
                fetchThaiAmphures(e.target.value);
              }}
            >
              <option>จังหวัด</option>
              {thaiProvinces
                ? thaiProvinces.map((el) => (
                    <option
                      key={el.id}
                      value={el.id}
                      selected={province === el.nameTh ? 'selected' : ''}
                    >
                      จังหวัด {el.nameTh}
                    </option>
                  ))
                : ''}
            </select>

            <select
              onChange={(e) => {
                setPostcode(e.target.value);
              }}
            >
              <option>รหัสไปรณีย์</option>
              {thaiZipCodes
                ? thaiZipCodes.map((el) => (
                    <option
                      key={el.id}
                      value={el.zipCode}
                      selected={postcode == el.zipCode ? 'selected' : ''}
                    >
                      {el.zipCode}
                    </option>
                  ))
                : ''}
            </select>
          </div>
          <div className="item7" hidden={thaiAddressId ? 'hidden' : ''}>
            * หากข้อมูลขึ้นไม่ครบ กรุณาแก้ไขใหม่
          </div>
          <div className="item6">
            * เลือก จังหวัด, อำเภอ, ตำบล และ รหัสไปรณีย์ ตามลำดับ
          </div>

          <div className="item4">
            <button type="submit">บันทึก</button>
            <button type="button" onClick={handleOnClickCancle}>
              ยกเลิก
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditAddressDelivery;
