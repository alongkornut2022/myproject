import React from 'react';

function AddressDelivery() {
  return (
    <div className="address_delivery">
      <div className="address_delivery_top">
        <div className="username_delivery">
          <span>ชื่อ-สกุล ผู้รับสินค้า</span>
        </div>
        <div className="phonenumber">
          <span>หมายเลขโทรศัพท์</span>
        </div>
      </div>
      <div className="address_delivery_middle">
        <div className="address_detial">ที่อยู่</div>
        <div className="district">อำเภอ/เขต</div>
      </div>
      <div className="address_delivery_bottom">
        <div className="address_delivery_bottom_left">
          <div className="province">จังหวัด</div>
          <div className="postcard">รหัสไปรษณีย์</div>
        </div>
        <div className="address_delivery_bottom_right">
          <div className="address_delivery_change">
            <button>แก้ไข</button>
            <button>ลบ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressDelivery;
