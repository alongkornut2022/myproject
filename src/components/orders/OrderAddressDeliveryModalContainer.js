import { Modal } from 'bootstrap';
import { useContext, useEffect, useRef, useState } from 'react';
import { ErrorContext } from '../../contexts/ErrorContext';
import axios from '../../config/axios';
import OrderAddressDeliveryModalItem from './OrderAddressDeliveryModalItem';
import AddAddressDelivery from '../AddAddressDelivery';

function OrderAddressDeliveryModalContainer({
  customerId,
  customerAddressDefaultId,
  handleOnClickAddressCustomerById,
}) {
  const modalEl = useRef();
  const [modal, setModal] = useState(null);

  const { setError } = useContext(ErrorContext);

  const [customerAddressAll, setCustomerAddressAll] = useState([]);
  const [customerAddressId, setCustomerAddressId] = useState();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [subDistrict, setSubDistrict] = useState('');
  const [district, setDistrict] = useState('');
  const [province, setProvince] = useState('');
  const [postcode, setPostcode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [thaiProvinces, setThaiprovinces] = useState([]);

  const fetchThaiProvinces = async () => {
    try {
      const resThaiProvinces = await axios.get('/thaiaddress/provinces');
      setThaiprovinces(resThaiProvinces.data.thaiProvinces);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const fetchAddressCustomerAll = async () => {
    try {
      const resAddress = await axios.get(`/address/customer/${customerId}`);
      setCustomerAddressAll(resAddress.data.customerAddressAll);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAddressCustomerAll();
  }, []);

  useEffect(() => {
    setCustomerAddressId(customerAddressDefaultId);
  }, []);

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
      <div className="order_address_delivery_modal_container">
        <div className="order_address_delivery_modal_item">
          {customerAddressAll.map((el) => (
            <OrderAddressDeliveryModalItem
              key={el.id}
              customerAddressAll={el}
              fetchData={fetchAddressCustomerAll}
              setCustomerAddressId={setCustomerAddressId}
              customerAddressId={customerAddressId}
              customerAddressDefaultId={customerAddressDefaultId}
              thaiProvinces={thaiProvinces}
              fetchThaiProvinces={fetchThaiProvinces}
            />
          ))}
        </div>
        <div className="order_address_delivery_modal_addaddress">
          <button type="button" onClick={handleClickModal}>
            + เพิ่มที่อยู่
          </button>
        </div>
        <div className="order_address_delivery_modal_buttom">
          <div className="item2">
            <button
              onClick={() =>
                handleOnClickAddressCustomerById(customerAddressId)
              }
            >
              ยืนยัน
            </button>
          </div>
        </div>
      </div>

      <div className="modal fade" tabIndex="-1" ref={modalEl}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">ที่อยู่ใหม่</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleOnClickCloseModal}
              ></button>
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

export default OrderAddressDeliveryModalContainer;
