import { Modal } from 'bootstrap';
import { useRef, useState } from 'react';
import OrderResultFinalProduct from './OrderResultFinalProduct';

function OrderResultFinal({ orderDetailById, shopName, orderItem }) {
  const {
    orderDetailId,
    fName,
    lName,
    addressDetail,
    subDistrict,
    District,
    province,
    postcode,
    phoneNumber,
    deliveryOption,
    deliveryPrice,
    productTotalPrice,
    paymentMethod,
    paymentImage,
    allTotalPrice,
    status,
    createdAt,
    updatedAt,
  } = orderDetailById;

  const modalEl7 = useRef();
  const [modal7, setModal7] = useState(null);

  const handleClickModal7 = () => {
    const modalObj = new Modal(modalEl7.current);
    setModal7(modalObj);
    modalObj.show();
  };

  const closeModal7 = () => {
    modal7.hide();
  };

  const date = new Date(createdAt);
  const day = date.getUTCDate();
  const monthNum = date.getUTCMonth();

  const month = monthNum + 1;
  const year = date.getUTCFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  const date2 = new Date(updatedAt);
  const day2 = date2.getUTCDate();
  const monthNum2 = date2.getUTCMonth();

  const month2 = monthNum2 + 1;
  const year2 = date2.getUTCFullYear();
  const hour2 = date2.getHours();
  const minutes2 = date2.getMinutes();

  return (
    <>
      <div>
        <div> หมายเลขใบสั่งซื้อ : {orderDetailId}</div>
        <br></br>
        <div>
          วันที่สั่งซื้อ : {day}/{month}/{year} {hour}:{minutes}{' '}
        </div>
        <div>
          วันที่ได้รับสินค้า : {day2}/{month2}/{year2} {hour2}:{minutes2}{' '}
        </div>
        <br></br>
        <div>
          ชื่อผู้รับสินค้า : {fName} {lName}
        </div>
        <div>
          ที่อยู่ในการจัดส่งสินค้า : {addressDetail}, ตำบล {subDistrict},
          อำเภอ/เขต {District}, จังหวัด {province},{postcode}
        </div>
        <div>เบอร์โทร. ติดต่อ : {phoneNumber}</div>
        <br></br>

        <div>ร้านค้า : {shopName}</div>

        <div>รายการสินค้า ({orderItem.length} รายการ)</div>

        {orderItem.map((el, index) => (
          <OrderResultFinalProduct key={el.id} orderItem={el} index={index} />
        ))}

        <div>รวมค่าสินค้า : {productTotalPrice} ฿</div>
        <div>ค่าจัดส่ง : {deliveryPrice} ฿</div>
        <div>รวมทั้งหมด : {allTotalPrice} ฿</div>
        <br></br>

        <div>วิธีการชำระเงิน : {paymentMethod}</div>
        <div>วิธีการจัดส่ง : {deliveryOption}</div>
        <div>สถานะ : {status} </div>
        <br></br>
      </div>
      <div>
        <button onClick={handleClickModal7}>
          {paymentImage ? <img src={paymentImage} height="100" /> : ''}
        </button>
      </div>

      <div className="modal fade" tabIndex="-1" ref={modalEl7}>
        <div className="modal-dialog modal-dialog-centered modal">
          <div className="modal-content">
            <div className="modal-header">
              {/* <h5 className="modal-title">หลักฐานการโอนเงิน (Transfer Slip)</h5> */}
              <button
                type="button"
                className="btn-close"
                onClick={closeModal7}
              ></button>
            </div>

            <div className="modal-body">
              <div
                className="transferslip_image"
                hidden={paymentImage ? '' : 'hidden'}
              >
                {paymentImage ? <img src={paymentImage} width="300" /> : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderResultFinal;
