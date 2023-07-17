import { Modal } from 'bootstrap';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useContext, useRef, useState } from 'react';
import { AuthSellerContext } from '../../contexts/AuthSellerContext';
import { ErrorContext } from '../../contexts/ErrorContext';
import axios from '../../config/axiosSeller';
import EditAddressSeller from './EditAddressSeller';

function AddressSeller({
  sellerAddress,
  fetchData,
  thaiProvinces,
  fetchThaiProvinces,
}) {
  const {
    id: sellerAddressId,
    firstName,
    lastName,
    addressDetail,
    subDistrict,
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

  const [thaiAddressId, setThaiAddressId] = useState([]);

  const handleOnClickSetAddressDefault = async () => {
    try {
      await axios.patch(
        `/address/seller/status/${sellerAddressId}/${seller.id}`
      );
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      document.location.reload();
    }
  };

  const fetchThaiAddressId = async () => {
    try {
      const resThaiAddressId = await axios.get(
        `/thaiaddress/total?subDistrict=${subDistrict}&&district=${district}&&province=${province}&&postcode=${postcode}`
      );
      setThaiAddressId(resThaiAddressId.data.thaiAddressId);
    } catch (err) {
      setError(err.response.data.message);
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
    fetchThaiProvinces();
    fetchThaiAddressId();
  };

  const closeModal = (event) => {
    modal.hide();
  };

  return (
    <>
      <div className="address_delivery">
        <div className="address_delivery_top">
          <div className="address_delivery_top_content">
            <div className="address_delivery_item0">
              ชื่อ-สกุล (หรือร้านค้า) {firstName} {lastName}
            </div>
            <div>||</div>
            <div className="address_delivery_item2"> {phoneNumber}</div>
          </div>

          <div className="address_delivery_top_content">
            <div className="address_delivery_item1">{addressDetail}</div>
          </div>

          <div className="address_delivery_top_content">
            <div className="address_delivery_item1">
              ตำบล/แขวง {subDistrict},
            </div>
            <div className="address_delivery_item2">อำเภอ/เขต {district}</div>
          </div>

          <div className="address_delivery_top_content">
            <div className="address_delivery_item1">จังหวัด {province},</div>
            <div className="address_delivery_item2">{postcode}</div>
          </div>
        </div>

        <div className="address_delivery_bottom">
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
          <div className="address_delivery_status">
            <div
              className={
                status === 'default' ? 'status_title' : 'status_title2'
              }
            >
              {status === 'default' ? 'ค่าเริ่มต้น' : ''}
            </div>
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
                thaiProvinces={thaiProvinces}
                thaiAddressId={thaiAddressId ? thaiAddressId : ''}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="address_delivery">
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
          <div className="address_delivery_status">
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
            <div className="address_delivery_title_3">ที่อยู่</div>
            <div className="address_delivery_input">{addressDetail}</div>
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

        <div className="address_delivery_top">
          <div className="address_delivery_subdistrict">
            <div className="address_delivery_title">ตำบล/แขวง</div>
            <div className="address_delivery_input">{subDistrict}</div>
          </div>

          <div className="address_delivery_district">
            <div className="address_delivery_title_2">อำเภอ/เขต</div>
            <div className="address_delivery_input">{district}</div>
          </div>
          <div className="address_delivery_status"></div>
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
            </div>
            <div className="modal-body">
              <EditAddressSeller
                sellerAddress={sellerAddress}
                closeModal={closeModal}
                fetchData={fetchData}
                thaiProvinces={thaiProvinces}
                thaiAddressId={thaiAddressId ? thaiAddressId : ''}
              />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default AddressSeller;
