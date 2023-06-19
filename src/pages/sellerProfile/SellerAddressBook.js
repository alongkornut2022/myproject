import { Modal } from 'bootstrap';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthSellerContext } from '../../contexts/AuthSellerContext';
import axios from '../../config/axiosSeller';
import AddressSeller from '../../components/sellers/AddressSeller';
import AddAddressSeller from '../../components/sellers/AddAddressSeller';

function SellerAddressBook() {
  const modalEl = useRef();
  const [modal, setModal] = useState(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [district, setDistrict] = useState('');
  const [province, setProvince] = useState('');
  const [postcode, setPostcode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [sellerAddress, setSellerAddress] = useState([]);

  const { seller } = useContext(AuthSellerContext);

  const fetchAddressSellerAll = async () => {
    try {
      const resAddress = await axios.get(`/address/seller/${seller.id}`);
      setSellerAddress(resAddress.data.sellerAddressAll);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAddressSellerAll();
  }, []);

  const handleClickModal = () => {
    const modalObj = new Modal(modalEl.current);
    setModal(modalObj);
    modalObj.show();
  };

  const closeModal = (event) => {
    modal.hide();
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

  const handleOnClickCloseModal = () => {
    closeModal();
    ClearInputField();
  };

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

  return (
    <>
      <div className="addressbook_main_content_right_top">
        <div>
          <h4>ที่อยู่ร้านค้า</h4>
        </div>
        <div>
          <div
            className="address_delivery_change"
            hidden={sellerAddress ? 'hidden' : ''}
          >
            <button type="button" onClick={handleClickModal}>
              เพิ่มที่อยู่
            </button>
          </div>
        </div>
      </div>

      <div className="addressbook_main_content_right_middle">
        {sellerAddress.map((el) => (
          <AddressSeller
            key={el.id}
            sellerAddress={el}
            fetchData={fetchAddressSellerAll}
          />
        ))}
      </div>
      <div className="modal fade" tabIndex="-1" ref={modalEl}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">ที่อยู่ใหม่ร้านค้า</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleOnClickCloseModal}
              ></button>
            </div>
            <div className="modal-body">
              <AddAddressSeller
                closeModal={closeModal}
                ClearInputField={ClearInputField}
                fetchData={fetchAddressSellerAll}
                valueInput={valueInput}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerAddressBook;
