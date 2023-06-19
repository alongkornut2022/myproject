import { useEffect, useRef, useState } from 'react';
import axios from '../../config/axios';
import { Modal } from 'bootstrap';
import SellerOrderProductItem from './SellerOrderProductItem';
import SellerAddresses from './SellerAddresses';

function SellerOrderItem({ orderSeller, sellerId }) {
  const {
    orderDetailId,
    customerName,
    // allTotalPrice,
    productTotalPrice,
    paymentMethod,
    status,
    // deliveryPrice,
    deliveryOption,
    createdAt,
  } = orderSeller;

  const modalEl = useRef();
  const [modal, setModal] = useState(null);

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

  const handleClickModal = () => {
    const modalObj = new Modal(modalEl.current);
    setModal(modalObj);
    modalObj.show();
  };
  const handleOnClickCloseModal = () => {
    closeModal();
  };
  const closeModal = (event) => {
    modal.hide();
  };

  const date = new Date(createdAt);
  const day = date.getUTCDate();
  const monthNum = date.getUTCMonth();
  // const monthNameEng = [
  //   'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  //   'August',
  //   'September',
  //   'October',
  //   'November',
  //   'December',
  // ];
  // const month = monthNameEng[monthNum];
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
            <div className="order_item_product_item1">
              {orderItem.map((el) => (
                <SellerOrderProductItem key={el.id} orderItem={el} />
              ))}
            </div>
            <div className="order_item_product_item2">
              <div className="item2_1">฿ {productTotalPrice}</div>
              <div className="item2_2"> {paymentMethod}</div>
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
              <button>
                <i class="fa-sharp fa-solid fa-truck-fast"></i> แจ้งจัดส่งสินค้า
              </button>
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
    </>
  );
}

export default SellerOrderItem;
