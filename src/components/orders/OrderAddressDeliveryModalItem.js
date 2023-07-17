import { Modal } from 'bootstrap';
import { useContext, useRef, useState } from 'react';
import { ErrorContext } from '../../contexts/ErrorContext';
import axios from '../../config/axios';
import EditAddressDelivery from '../EditAddressDelivery';

function OrderAddressDeliveryModalItem({
  customerAddressAll,
  fetchData,
  setCustomerAddressId,
  customerAddressId,
  thaiProvinces,
  fetchThaiProvinces,
}) {
  const {
    id,
    firstName,
    lastName,
    addressDetail,
    subDistrict,
    district,
    province,
    postcode,
    phoneNumber,
    status,
  } = customerAddressAll;

  const modalEl = useRef();
  const [modal, setModal] = useState(null);

  const { setError } = useContext(ErrorContext);

  const [thaiAddressId, setThaiAddressId] = useState([]);

  const handleOnClickSetCurrentAddress = (event) => {
    if (event.currentTarget.checked) {
      setCustomerAddressId(id);
    } else {
      setCustomerAddressId();
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
      <div className="order_address_delivery_modal_item_container">
        <div className="order_address_delivery_modal_item_checkbox">
          <input
            type="checkbox"
            checked={customerAddressId === id ? 'checked' : ''}
            onClick={handleOnClickSetCurrentAddress}
          />
        </div>
        <div className="order_address_delivery_modal_item_detail">
          <div className="item1">
            <div className="item1_1">
              {firstName} {lastName}
            </div>
            <div className="item1_2">| {phoneNumber}</div>
          </div>
          <div className="item2">ที่อยู่ {addressDetail}</div>
          <div className="item3">
            ตำบล/แขวง {subDistrict} อำเภอ/เขต {district}
          </div>
          <div className="item3">
            จังหวัด {province} {postcode}
          </div>
        </div>
        <div className="order_address_delivery_modal_item_edit">
          <button
            type="button"
            onClick={handleClickModal}
            closeModal={closeModal}
            fetchData={fetchData}
          >
            แก้ไข
          </button>
          <div className={status === 'default' ? 'item2' : 'item2_2'}>
            {status === 'default' ? 'ค่าเริ่มต้น' : ''}
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
                customerAddress={customerAddressAll}
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

export default OrderAddressDeliveryModalItem;
