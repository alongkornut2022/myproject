function OrderAddressDelivery({ customerAddressCurrent }) {
  const {
    firstName,
    lastName,
    addressDetail,
    subDistrict,
    district,
    province,
    postcode,
    phoneNumber,
    status,
  } = customerAddressCurrent;
  return (
    <>
      <div className="ordertotal_main_content_address_detail_content">
        <div className="ordertotal_main_content_address_detail_content_left">
          <div className="item1">
            {firstName} {lastName} ||
          </div>

          <div className="item1">
            <i class="fa-sharp fa-solid fa-phone"></i> {phoneNumber}
          </div>
        </div>
        <div className="ordertotal_main_content_address_detail_content_right">
          <div className={status === 'default' ? 'item4' : 'item4_2'}>
            {status === 'default' ? 'ค่าเริ่มต้น' : ''}
          </div>
        </div>
      </div>

      <div className="ordertotal_main_content_address_detail_content">
        <div className="item3">{addressDetail}</div>
      </div>

      <div className="ordertotal_main_content_address_detail_content">
        <div className="item3">
          ตำบล/แขวง {subDistrict}, อำเภอ/เขต {district}
        </div>
      </div>

      <div className="ordertotal_main_content_address_detail_content">
        <div className="item3">
          จังหวัด {province}, {postcode}
        </div>
      </div>
    </>
  );
}

export default OrderAddressDelivery;
