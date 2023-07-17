import { Modal } from 'bootstrap';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthSellerContext } from '../../contexts/AuthSellerContext';
import { ErrorContext } from '../../contexts/ErrorContext';
import axios from '../../config/axiosSeller';
import AddressSeller from '../../components/sellers/AddressSeller';
import AddAddressSeller from '../../components/sellers/AddAddressSeller';

function SellerAddressBook() {
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

  const [sellerAddress, setSellerAddress] = useState([]);

  const { seller } = useContext(AuthSellerContext);
  const { setError } = useContext(ErrorContext);

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
        <div>
          <h4>ที่อยู่ร้านค้า</h4>
        </div>
        <div>
          <div
            className="address_delivery_change"
            hidden={sellerAddress.length > 0 ? 'hidden' : ''}
          >
            <button type="button" onClick={handleClickModal}>
              เพิ่มที่อยู่ร้านค้า
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
            thaiProvinces={thaiProvinces}
            fetchThaiProvinces={fetchThaiProvinces}
          />
        ))}
      </div>
      <div className="modal fade" tabIndex="-1" ref={modalEl}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">เพิ่มที่อยู่ร้านค้า</h5>
            </div>
            <div className="modal-body">
              <AddAddressSeller
                closeModal={closeModal}
                ClearInputField={ClearInputField}
                fetchData={fetchAddressSellerAll}
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

export default SellerAddressBook;
