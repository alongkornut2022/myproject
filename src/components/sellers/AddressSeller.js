import { Modal } from 'bootstrap';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useContext, useRef, useState } from 'react';
import { AuthSellerContext } from '../../contexts/AuthSellerContext';
import { ErrorContext } from '../../contexts/ErrorContext';
import axios from '../../config/axiosSeller';
import EditAddressSeller from './EditAddressSeller';

function AddressSeller({ sellerAddress, fetchData }) {
  const {
    id: sellerAddressId,
    firstName,
    lastName,
    addressDetail,
    district,
    province,
    postcode,
    phoneNumber,
    status,
  } = sellerAddress;

  const modalEl = useRef();
  const [modal, setModal] = useState(null);

  const { seller } = useContext(AuthSellerContext);
  const { setError } = useContext(ErrorContext);

  const handleOnClickSetAddressDefault = async () => {
    try {
      await axios.patch(
        `/address/seller/status/${sellerAddressId}/${seller.id}`
      );
    } catch (err) {
    } finally {
      document.location.reload();
    }
  };

  const DeleteSellerAddress = async () => {
    try {
      await axios.delete(`/address/seller/${sellerAddressId}/${seller.id}`);
      await fetchData();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleOnClickDeleteSellerAddress = () => {
    confirmAlert({
      title: 'Confirm to onClick',
      message: 'คุณต้องการ ลบ ที่อยู่นี่หรือไม่',
      buttons: [
        {
          label: 'Yes',
          onClick: () => DeleteSellerAddress(),
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
            <div className="address_delivery_title">ชื่อ-สกุล (ร้านค้า)</div>
            <div className="address_delivery_input">
              {firstName} {lastName}
            </div>
          </div>

          <div className="address_delivery_phonenumber">
            <div className="address_delivery_title_2">โทรศัพท์</div>
            <div className="address_delivery_input">{phoneNumber}</div>
          </div>
          <div className="address_delivery_status" hidden="hidden">
            <div
              className={
                status === 'default' ? 'status_title' : 'status_title2'
              }
            >
              {status === 'default' ? 'ค่าเริ่มต้น' : ''}
            </div>
          </div>
        </div>

        <div className="address_delivery_middle">
          <div className="address_detial">
            <div className="address_delivery_title">ที่อยู่</div>
            <div className="address_delivery_input">{addressDetail}</div>
          </div>
          <div className="address_delivery_district">
            <div className="address_delivery_title_2">อำเภอ/เขต</div>
            <div className="address_delivery_input">{district}</div>
          </div>
          <div className="address_delivery_status">
            <button
              type="button"
              disabled={status === 'default' ? 'disabled' : ''}
              onClick={handleOnClickSetAddressDefault}
            >
              ตั้งเป็นค่าเริ่มต้น
            </button>
          </div>
        </div>

        <div className="address_delivery_bottom">
          <div className="address_delivery_province">
            <div className="address_delivery_title">จังหวัด</div>
            <div className="address_delivery_input">{province}</div>
          </div>

          <div className="address_delivery_postcard">
            <div className="address_delivery_title_2">รหัสไปรษณีย์ </div>
            <div className="address_delivery_input">{postcode}</div>
          </div>

          <div className="address_delivery_edit">
            <button
              type="button"
              onClick={handleClickModal}
              closeModal={closeModal}
              fetchData={fetchData}
            >
              แก้ไข
            </button>
            <button type="button" onClick={handleOnClickDeleteSellerAddress}>
              ลบ
            </button>
          </div>
        </div>
      </div>

      <div className="modal fade" tabIndex="-1" ref={modalEl}>
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
              <EditAddressSeller
                sellerAddress={sellerAddress}
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

export default AddressSeller;
