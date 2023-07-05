import { useEffect, useState } from 'react';
import axios from '../../config/axiosSeller';

function SellerAddresses({ orderSeller, sellerId }) {
  const {
    fNameCustomer,
    lNameCustomer,
    addressCustomer,
    districtCustomer,
    provinceCustomer,
    phoneNumberCustomer,
    postcodeCustomer,
    shopName,
  } = orderSeller;

  const [sellerAddress, setSellerAddress] = useState([]);

  const { firstName, LastName, addressDetail, district, province, postcode } =
    sellerAddress;

  const fetchSellerAddress = async () => {
    try {
      const resSellerAddress = await axios.get(
        `/address/seller/default/${sellerId}`
      );
      setSellerAddress(resSellerAddress.data.sellerAddressDefault);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSellerAddress();
  }, [sellerId]);

  return (
    <>
      <div className="order_selleraddresses_container">
        <div className="order_selleraddresses_seller_main">
          <div className="item1">ผู้ส่งสินค้า (ร้านค้า : ผู้ขาย)</div>
          <div className="item2">ขื่อร้านค้า : {shopName}</div>
          <div className="item2">ที่อยู่ : {addressDetail}</div>
          <div className="item2">อำเภอ/เขต : {district}</div>
          <div className="item2">จังหวัด : {province}</div>
          <div className="item2">รหัสไปรษณีย์ : {postcode}</div>
        </div>
        <div className="order_selleraddresses_customer_main">
          <div className="item1">ผู้รับสินค้า (ลูกค้า : ผู้ซื้อ)</div>
          <div className="item2">ชื่อ : {fNameCustomer}</div>
          <div className="item2">นามสกุล : {lNameCustomer}</div>
          <div className="item2">ที่อยู่: {addressCustomer}</div>
          <div className="item2">อำเภอ/เขต: {districtCustomer}</div>
          <div className="item2">จังหวัด : {provinceCustomer}</div>
          <div className="item2">รหัสไปรษณีย์ : {postcodeCustomer}</div>
        </div>
      </div>
    </>
  );
}

export default SellerAddresses;
