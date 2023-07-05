import { Modal } from 'bootstrap';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ErrorContext } from '../contexts/ErrorContext';
import axios from '../config/axios';
import EditAddressDelivery from '../components/EditAddressDelivery';

function AddressDelivery({
  customerAddress,
  fetchData,
  thaiProvinces,
  fetchThaiProvinces,
}) {
  const {
    id: customerAddressId,
    firstName,
    lastName,
    addressDetail,
    subDistrict,
    district,
    province,
    postcode,
    phoneNumber,
    status,
  } = customerAddress;

  const modalEl = useRef();
  const [modal, setModal] = useState(null);

  const { customer } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

  const [thaiAddressId, setThaiAddressId] = useState([]);

  const handleOnClickSetAddressDefault = async () => {
    try {
      await axios.patch(
        `/address/customer/status/${customerAddressId}/${customer.id}`
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
              ชื่อ-สกุล {firstName} {lastName}
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
            <button type="button" onClick={handleOnClickDeleteCustomerAddress}>
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
              <EditAddressDelivery
                customerAddress={customerAddress}
                closeModal={closeModal}
                fetchData={fetchData}
                thaiProvinces={thaiProvinces}
                thaiAddressId={thaiAddressId ? thaiAddressId : ''}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddressDelivery;
