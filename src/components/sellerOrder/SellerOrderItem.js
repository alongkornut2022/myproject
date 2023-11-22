import { useEffect, useRef, useState } from 'react';
import axios from '../../config/axios';
import { Modal } from 'bootstrap';
import SellerOrderProductItem from './SellerOrderProductItem';
import SellerAddresses from './SellerAddresses';
import SellerOrderListBar from './SellerOrderListBar';

function SellerOrderItem({ orderSeller, sellerId, handleOnClickSearchOrder }) {
  const {
    orderDetailId,
    customerName,
    // allTotalPrice,
    productTotalPrice,
    paymentId,
    paymentMethod,
    paymentImage,
    status,
    deliveryId,
    // deliveryPrice,
    deliveryOption,
    createdAt,
  } = orderSeller;

  const modalEl = useRef();
  const [modal, setModal] = useState(null);

  const modalEl2 = useRef();
  const [modal2, setModal2] = useState(null);

  const [orderItem, setOrderItem] = useState([]);

  let newStatus;
  if (status === 'ชำระเงินแล้ว' || status === 'อนุมัติแล้ว') {
    newStatus = 'ที่ต้องจัดส่ง';
  } else {
    newStatus = status;
  }

  const fetchOrderItem = async () => {
    try {
      const resOrderItem = await axios.get(
        `/sellers/order/orderitem/${orderDetailId}/seller/${sellerId}`
      );
      setOrderItem(resOrderItem.data.orderItem);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrderItem();
  }, [orderSeller]);

  const handOnClickDelivery = async () => {
    if (window.confirm('คุณต้องการ แจ้งจัดส่งพัสดุ หรือไม่') == true) {
      try {
        await axios.patch(
          `/sellers/order/delivery/${sellerId}/${deliveryId}/${orderDetailId}`
        );
        alert('แจ้งจัดส่งพัสดุ เรียบร้อย');
      } catch (err) {}
    } else {
    }
  };

  const handleClickModal = () => {
    const modalObj = new Modal(modalEl.current);
    setModal(modalObj);
    modalObj.show();
  };
  const handleOnClickCloseModal = () => {
    closeModal();
  };
  const closeModal = () => {
    modal.hide();
  };
  const handleClickModal2 = () => {
    const modalObj = new Modal(modalEl2.current);
    setModal2(modalObj);
    modalObj.show();
  };

  const closeModal2 = () => {
    modal2.hide();
  };

  const date = new Date(createdAt);
  const day = date.getUTCDate();
  const monthNum = date.getUTCMonth();

  const month = monthNum + 1;
  const year = date.getUTCFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return (
    <>
      <div className="orderresult_container_item_main">
        <div className="orderresult_item_top">
          <div className="orderresult_item_seller">
            <div className="orderresult_item_seller_left">
              ชื่อผู้ซื้อ : {customerName}
            </div>
            <div className="orderresult_item_seller_right">
              <div>หมายเลขคำสั่งซื้อ : {orderDetailId} |</div>
              <div>
                | วันสั่งซื้อ {day}/{month}/{year} {hour}:{minutes}
              </div>
            </div>
          </div>

          <div className="order_item_product_container">
            <div className="order_item_product_container_left">
              <div className="order_item_product_item1">
                {orderItem.map((el) => (
                  <SellerOrderProductItem key={el.id} orderItem={el} />
                ))}
              </div>
            </div>

            <SellerOrderListBar
              handleOnClickSearchOrder={handleOnClickSearchOrder}
            />

            <div className="order_item_product_container_right">
              <div className="order_item_product_item2">
                <div className="item2_1">฿ {productTotalPrice}</div>
                <div className="item2_2">
                  {paymentMethod === 'การโอนเงิน' &&
                  (status === 'ชำระเงินแล้ว' ||
                    status === 'อนุมัติแล้ว' ||
                    status === 'อยู่ระหว่างจัดส่ง' ||
                    status === 'จัดส่งสำเร็จ') ? (
                    <div className="button_transferslip">
                      <button onClick={handleClickModal2}>Transfer Slip</button>
                    </div>
                  ) : (
                    paymentMethod
                  )}
                </div>
              </div>
              <div className="order_item_product_item3">{newStatus}</div>
              <div className="order_item_product_item4">
                <div>{deliveryOption}</div>
                <button onClick={handleClickModal}>ที่อยู่จัดส่งพัสดุ</button>
              </div>
              <div
                className="order_item_product_item5"
                hidden={newStatus === 'ที่ต้องจัดส่ง' ? '' : 'hidden'}
              >
                <button onClick={handOnClickDelivery}>
                  <i class="fa-sharp fa-solid fa-truck-fast"></i>{' '}
                  แจ้งจัดส่งสินค้า
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="orderresult_item_buttom"></div>
      </div>

      <div className="modal fade" tabIndex="-1" ref={modalEl}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">ที่อยู่ รับ-ส่ง พัสดุ</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleOnClickCloseModal}
              ></button>
            </div>

            <div className="modal-body">
              <SellerAddresses orderSeller={orderSeller} sellerId={sellerId} />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" tabIndex="-1" ref={modalEl2}>
        <div className="modal-dialog modal-dialog-centered modal">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">หลักฐานการโอนเงิน (Transfer Slip)</h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal2}
              ></button>
            </div>

            <div className="modal-body">
              <div className="transferslip_image">
                <img src={paymentImage} width="300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerOrderItem;
