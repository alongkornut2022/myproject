import { useRef, useState } from 'react';
import axios from '../../config/axios';
import { Modal } from 'bootstrap';

function TransferMoneyContainer({ orderDetailById, customerId, closeModal4 }) {
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
    allTotalPrice,
    status,
    createdAt,
    paymentId,
  } = orderDetailById;

  const uploadImageEl1 = useRef();
  const [image1, setImage1] = useState(null);

  const modalEl6 = useRef();
  const [modal6, setModal6] = useState(null);

  const handleOnClickSubmit = async () => {
    try {
      if (image1) {
        if (
          window.confirm('คุณแน่ใจว่าต้องการ แจ้งการโอนเงิน หรือไม่') == true
        ) {
          const formData = new FormData();
          formData.append('transfermoney', image1);

          await axios.patch(
            `payment/transferMoney/${customerId}/${paymentId}/${orderDetailId}`,
            formData
          );
          alert('แจ้งการโอนเงิน เรียบร้อย');
          closeModal4();
        } else {
        }
      } else {
        alert('คุณยังไม่ได้ upload สลิป');
      }
    } catch (err) {}
  };

  const handleClickModal6 = () => {
    const modalObj = new Modal(modalEl6.current);
    setModal6(modalObj);
    modalObj.show();
  };

  const closeModal6 = () => {
    modal6.hide();
  };

  const date = new Date(createdAt);
  const day = date.getUTCDate();
  const monthNum = date.getUTCMonth();

  const month = monthNum + 1;
  const year = date.getUTCFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return (
    <div>
      <div>
        <div>สรุปรายการสั่งซื้อ</div>
        <br></br>
        <div> หมายเลขใบสั่งซื้อ : {orderDetailId}</div>
        <div>
          วันที่สั่งซื้อ : {day}/{month}/{year} {hour}:{minutes}{' '}
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
        <div>วิธีการชำระเงิน : {paymentMethod}</div>
        <div>วิธีการจัดส่ง : {deliveryOption}</div>
        <br></br>
        <div>รวมค่าสินค้า : {productTotalPrice} ฿</div>
        <div>ค่าจัดส่ง : {deliveryPrice} ฿</div>
        <div>รวมทั้งหมด : {allTotalPrice} ฿</div>
        <div>สถานะ : {status} </div>
        <br></br>
      </div>

      <div>
        <div className="sellerproductadd_image_item">
          <button onClick={() => uploadImageEl1.current.click()}>
            {image1 ? '' : '+ โหลดสลิป'}
          </button>

          {image1 ? (
            <button onClick={handleClickModal6}>
              <img
                src={
                  typeof image1 === 'string'
                    ? image1
                    : URL.createObjectURL(image1)
                }
              />
            </button>
          ) : (
            ''
          )}

          <div
            className="sellerproductadd_image_item_2"
            hidden={image1 ? '' : 'hidden'}
          >
            <button onClick={() => setImage1(null)}>
              <i class="fa-solid fa-circle-xmark fa-lg"></i>
            </button>
          </div>
        </div>

        <input
          type="file"
          ref={uploadImageEl1}
          onChange={(event) => {
            if (event.target.files[0].size > 1048576) {
              alert('รูปภาพขนาดต้องไม่เกิน 1 MB');
            } else {
              if (event.target.files[0]) {
                setImage1(event.target.files[0]);
              }
            }
          }}
          hidden="hidden"
        />
      </div>
      <div className="button_purchase">
        <button onClick={handleOnClickSubmit}>แจ้งการโอนเงิน</button>
      </div>

      <div className="modal fade" tabIndex="-1" ref={modalEl6}>
        <div className="modal-dialog modal-dialog-centered modal">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">หลักฐานการโอนเงิน (Transfer Slip)</h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal6}
              ></button>
            </div>

            <div className="modal-body">
              <div
                className="transferslip_image"
                hidden={image1 ? '' : 'hidden'}
              >
                {image1 ? (
                  <img src={URL.createObjectURL(image1)} width="300" />
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferMoneyContainer;
