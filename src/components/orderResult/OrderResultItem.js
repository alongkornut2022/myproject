import { useEffect, useRef, useState } from 'react';
import { Modal } from 'bootstrap';
import axios from '../../config/axios';
import OrderResultProductItem from './OrderResultProductItem';
import PostReviewContainer from '../postReview/PostReviewContainer';
import SeePostReviewContainer from '../postReview/SeePostReviewContainer';
import BuyAgainContainer from '../postReview/BuyAgainContainer';
import OrderResultItemTopBar from './OrderResultItemTopBar';
import OrderResultItemBottomBar from './OrderResultItemBottomBar';

function OrderResultItem({ orderCustomer, customerId }) {
  const {
    orderDetailId,
    shopName,
    allTotalPrice,
    paymentMethod,
    status,
    deliveryPrice,
  } = orderCustomer;

  const modalEl = useRef();
  const [modal, setModal] = useState(null);

  const modalEl2 = useRef();
  const [modal2, setModal2] = useState(null);

  const modalEl3 = useRef();
  const [modal3, setModal3] = useState(null);

  const [orderItem, setOrderItem] = useState([]);
  const [orderRating, setOrderRating] = useState([]);
  const [triggerOrderRating, setTriggerOrderRating] = useState(false);
  const [triggerProductRating, setTriggerProductRating] = useState(false);

  // console.log('1', orderRating);

  const fetchOrderItem = async () => {
    try {
      const resOrderItem = await axios.get(
        `/purchase/order/productitem/${orderDetailId}/customer/${customerId}`
      );
      setOrderItem(resOrderItem.data.orderItem);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchOrderRating = async () => {
    try {
      const resOrderRating = await axios.get(
        `/postreview/order/${customerId}/${orderDetailId}`
      );
      setOrderRating(resOrderRating.data.orderRating);
      setTriggerOrderRating(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnClickDeleteOrder = async () => {
    if (
      window.confirm('คุณแน่ใจหรือว่า ต้องการ "ยกเลิกคำสั่งซื้อ" ? ') === true
    ) {
      try {
        await axios.delete(
          `/purchase/order/${orderDetailId}/customer/${customerId}`
        );
      } catch (err) {
        console.log(err);
      } finally {
        document.location.reload();
      }
    } else {
    }
  };

  useEffect(() => {
    fetchOrderItem();
  }, [orderCustomer]);

  useEffect(() => {
    fetchOrderRating();
  }, [orderCustomer, triggerOrderRating]);

  const handleClickModal = () => {
    const modalObj = new Modal(modalEl.current);
    setModal(modalObj);
    modalObj.show();
  };

  const closeModal = (event) => {
    modal.hide();
  };

  const handleClickModal2 = () => {
    const modalObj = new Modal(modalEl2.current);
    setModal2(modalObj);
    modalObj.show();
    setTriggerProductRating(true);
  };
  const handleOnClickCloseModal2 = () => {
    closeModal2();
    setTriggerProductRating(false);
  };
  const closeModal2 = (event) => {
    modal2.hide();
    setTriggerProductRating(false);
  };

  const handleClickModal3 = () => {
    const modalObj = new Modal(modalEl3.current);
    setModal3(modalObj);
    modalObj.show();
  };
  const handleOnClickCloseModal3 = () => {
    closeModal3();
  };
  const closeModal3 = (event) => {
    modal3.hide();
  };

  const inputPostReviewContainer = {
    orderItem,
    closeModal,
    customerId,
    orderDetailId,
    setTriggerOrderRating,
  };

  return (
    <>
      <div className="orderresult_container_item_main">
        <div className="orderresult_item_top">
          <div className="orderresult_item_seller">
            <OrderResultItemTopBar
              orderCustomer={orderCustomer}
              orderRating={orderRating}
              handleClickModal={handleClickModal}
            />
          </div>

          <div className="orderresult_item_product">
            {orderItem.map((el) => (
              <OrderResultProductItem key={el.id} orderItem={el} />
            ))}
          </div>
        </div>

        <OrderResultItemBottomBar
          orderCustomer={orderCustomer}
          handleClickModal3={handleClickModal3}
          handleClickModal2={handleClickModal2}
          handleOnClickDeleteOrder={handleOnClickDeleteOrder}
        />
      </div>

      <div className="modal fade" tabIndex="1" ref={modalEl}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">ให้คะแนนสินค้า</h5>
            </div>
            <div className="modal-body">
              <PostReviewContainer
                inputPostReviewContainer={inputPostReviewContainer}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" tabIndex="-1" ref={modalEl2}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">คะแนนของสินค้า</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleOnClickCloseModal2}
              ></button>
            </div>
            <div className="modal-body">
              <SeePostReviewContainer
                orderItem={orderItem}
                closeModal2={closeModal2}
                triggerOrderRating={triggerOrderRating}
                setTriggerOrderRating={setTriggerOrderRating}
                triggerProductRating={triggerProductRating}
                setTriggerProductRating={setTriggerProductRating}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" tabIndex="-1" ref={modalEl3}>
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">สั่งซื้ออีกครั้ง</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleOnClickCloseModal3}
              ></button>
            </div>
            <div className="modal-body">
              <BuyAgainContainer
                shopName={shopName}
                orderItem={orderItem}
                closeModal3={closeModal3}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderResultItem;
