import { Modal } from 'bootstrap';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ErrorContext } from '../contexts/ErrorContext';
import axios from '../config/axios';
import EditAddressDelivery from '../components/EditAddressDelivery';

function AddressDelivery({ customerAddress, fetchData }) {
  const {
    id: customerAddressId,
    firstName,
    lastName,
    addressDetail,
    district,
    province,
    postcode,
    phoneNumber,
  } = customerAddress;

  const modalEl = useRef();
  const [modal, setModal] = useState(null);

  const { customer } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

  const DeleteCustomerAddress = async () => {
    try {
      await axios.delete(
        `/address/customer/${customerAddressId}/${customer.id}`
      );
      await fetchData();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleOnClickDeleteCustomerAddress = () => {
    confirmAlert({
      title: 'Confirm to onClick',
      message: 'คุณต้องการ ลบ ที่อยู่นี่หรือไม่',
      buttons: [
        {
          label: 'Yes',
          onClick: () => DeleteCustomerAddress(),
        },
        {
          label: 'No',
        },
      ],
    });
  };

  const handleClickModal = () => {
    const modalObj = new Modal(modalEl.current);
    setModal(modalObj);
    modalObj.show();
  };

  const closeModal = (event) => {
    modal.hide();
  };

  return (
    <>
      <div className="address_delivery">
        <div className="address_delivery_top">
          <div className="username_delivery">
            <span>ชื่อ-สกุล ผู้รับสินค้า : </span>
            <span>
              {firstName} {lastName}
            </span>
          </div>
          <div className="phonenumber">
            <span>หมายเลขโทรศัพท์ : </span>
            <san>{phoneNumber}</san>
          </div>
        </div>
        <div className="address_delivery_middle">
          <div className="address_detial">
            <span>ที่อยู่ : </span>
            <san>{addressDetail}</san>
          </div>
          <div className="district">
            <span>อำเภอ/เขต : </span>
            <san>{district}</san>
          </div>
        </div>
        <div className="address_delivery_bottom">
          <div className="address_delivery_bottom_left">
            <div className="province">
              <span>จังหวัด : </span>
              <san>{province}</san>
            </div>
            <div className="postcard">
              <span>รหัสไปรษณีย์ : </span>
              <san>{postcode}</san>
            </div>
          </div>
          <div className="address_delivery_bottom_right">
            <div className="address_delivery_change">
              <button
                type="button"
                onClick={handleClickModal}
                closeModal={closeModal}
                fetchData={fetchData}
              >
                แก้ไข
              </button>
              <button
                typr="button"
                onClick={handleOnClickDeleteCustomerAddress}
              >
                ลบ
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        // id="modal-register"
        tabIndex="-1"
        ref={modalEl}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">แก้ไขที่อยู่</h5>
              <button
                type="reset"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <EditAddressDelivery
                customerAddress={customerAddress}
                closeModal={closeModal}
                fetchData={fetchData}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddressDelivery;
