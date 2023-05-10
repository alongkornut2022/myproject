function OrderAddressDelivery({ customerAddressCurrent }) {
  const {
    firstName,
    lastName,
    addressDetail,
    district,
    province,
    postcode,
    phoneNumber,
    status,
  } = customerAddressCurrent;
  return (
    <>
      <div className="item1">
        {firstName} {lastName},
      </div>
      <div className="item2">{phoneNumber},</div>
      <div className="item3">
        {addressDetail}, อำเภอ/เขต {district}, จังหวัด {province}, {postcode}
      </div>
      <div className={status === 'default' ? 'item4' : 'item4_2'}>
        {status === 'default' ? 'ค่าเริ่มต้น' : ''}
      </div>
    </>
  );
}

export default OrderAddressDelivery;
