import { Modal } from 'bootstrap';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ErrorContext } from '../../contexts/ErrorContext';
import axios from '../../config/axios';
import AddressDelivery from '../../components/AddressDelivery';
import AddAddressDelivery from '../../components/AddAddressDelivery';

function AddressBook() {
  const modalEl = useRef();
  const [modal, setModal] = useState(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [subDistrict, setSubDistrict] = useState('');
  const [district, setDistrict] = useState('');
  const [province, setProvince] = useState('');
  const [postcode, setPostcode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [thaiProvinces, setThaiprovinces] = useState([]);

  const [customerAddress, setCustomerAddress] = useState([]);

  const { customer } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

  const fetchAddressCustomerAll = async () => {
    try {
      const resAddress = await axios.get(`/address/customer/${customer.id}`);
      setCustomerAddress(resAddress.data.customerAddressAll);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAddressCustomerAll();
  }, []);

  const fetchThaiProvinces = async () => {
    try {
      const resThaiProvinces = await axios.get('/thaiaddress/provinces');
      setThaiprovinces(resThaiProvinces.data.thaiProvinces);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleClickModal = () => {
    const modalObj = new Modal(modalEl.current);
    setModal(modalObj);
    modalObj.show();
    fetchThaiProvinces();
  };

  const closeModal = (event) => {
    modal.hide();
  };

  const handleOnClickCloseModal = () => {
    closeModal();
    ClearInputField();
  };

  const ClearInputField = () => {
    setFirstName('');
    setLastName('');
    setAddressDetail('');
    setSubDistrict('');
    setDistrict('');
    setProvince('');
    setPostcode('');
    setPhoneNumber('');
  };

  const valueInput = {
    firstName,
    lastName,
    addressDetail,
    subDistrict,
    district,
    province,
    postcode,
    phoneNumber,
    setFirstName,
    setLastName,
    setAddressDetail,
    setSubDistrict,
    setDistrict,
    setProvince,
    setPostcode,
    setPhoneNumber,
  };

  return (
    <>
      <div className="addressbook_main_content_right_top">
        <div className="addressbook_main_content_right_top_title">
          ที่อยู่รับสินค้า
        </div>
        <div>
          <div className="address_delivery_change">
            <button type="button" onClick={handleClickModal}>
              เพิ่มที่อยู่
            </button>
          </div>
        </div>
      </div>

      <div className="addressbook_main_content_right_middle">
        {customerAddress.map((el) => (
          <AddressDelivery
            key={el.id}
            customerAddress={el}
            fetchData={fetchAddressCustomerAll}
            thaiProvinces={thaiProvinces}
            fetchThaiProvinces={fetchThaiProvinces}
          />
        ))}
      </div>
      <div className="modal fade" tabIndex="-1" ref={modalEl}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">ที่อยู่ใหม่</h5>
              {/* <button
                type="button"
                className="btn-close"
                onClick={handleOnClickCloseModal}
              ></button> */}
            </div>
            <div className="modal-body">
              <AddAddressDelivery
                closeModal={closeModal}
                ClearInputField={ClearInputField}
                fetchData={fetchAddressCustomerAll}
                valueInput={valueInput}
                thaiProvinces={thaiProvinces}
                setThaiprovinces={setThaiprovinces}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddressBook;
