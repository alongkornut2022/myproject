import { Modal } from 'bootstrap';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import axios from '../../config/axios';
import AddressDelivery from '../../components/AddressDelivery';
import AddAddressDelivery from '../../components/AddAddressDelivery';

function AddressBook() {
  const modalEl = useRef();
  const [modal, setModal] = useState(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [district, setDistrict] = useState('');
  const [province, setProvince] = useState('');
  const [postcode, setPostcode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const valueInput = {
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
  };

  const ClearInputField = () => {
    setFirstName('');
    setLastName('');
    setAddressDetail('');
    setDistrict('');
    setProvince('');
    setPostcode('');
    setPhoneNumber('');
  };

  const [customerAddress, setCustomerAddress] = useState([]);

  const { customer } = useContext(AuthContext);

  const fetchData = async () => {
    try {
      const resAddress = await axios.get(`/address/customer/${customer.id}`);
      setCustomerAddress(resAddress.data.customerAddress);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClickModal = () => {
    const modalObj = new Modal(modalEl.current);
    setModal(modalObj);
    modalObj.show();
  };

  const closeModal = (event) => {
    modal.hide();
  };

  const handleOnClickCloseModal = () => {
    closeModal();
    ClearInputField();
  };

  return (
    <>
      <div className="addressbook_main_content_right_top">
        <div>
          <h4>ที่อยู่รับสินค้า</h4>
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
            fetchData={fetchData}
          />
        ))}
      </div>
      <div
        className="modal fade"
        // id="modal-add-address"
        tabIndex="-1"
        ref={modalEl}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">ที่อยู่ใหม่</h5>
              <button
                type="button"
                className="btn-close"
                // data-bs-dismiss="modal"
                onClick={handleOnClickCloseModal}
              ></button>
            </div>
            <div className="modal-body">
              <AddAddressDelivery
                closeModal={closeModal}
                ClearInputField={ClearInputField}
                fetchData={fetchData}
                valueInput={valueInput}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddressBook;
