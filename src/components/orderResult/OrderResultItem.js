import { useEffect, useRef, useState } from 'react';
import { Modal } from 'bootstrap';
import axios from '../../config/axios';
import OrderResultProductItem from './OrderResultProductItem';
import PostReviewContainer from '../postReview/PostReviewContainer';
import SeePostReviewContainer from '../postReview/SeePostReviewContainer';
import BuyAgainContainer from '../postReview/BuyAgainContainer';
import OrderResultItemTopBar from './OrderResultItemTopBar';
import OrderResultItemBottomBar from './OrderResultItemBottomBar';
import TransferMoneyContainer from './TransferMoneyContainer';
import OrderResultFinal from './OrderResultFinal';

function OrderResultItem({ orderCustomer, customerId }) {
  const { orderDetailId, shopName, status } = orderCustomer;

  const modalEl = useRef();
  const [modal, setModal] = useState(null);

  const modalEl2 = useRef();
  const [modal2, setModal2] = useState(null);

  const modalEl3 = useRef();
  const [modal3, setModal3] = useState(null);

  const modalEl4 = useRef();
  const [modal4, setModal4] = useState(null);

  const modalEl5 = useRef();
  const [modal5, setModal5] = useState(null);

  const [orderItem, setOrderItem] = useState([]);
  const [orderRating, setOrderRating] = useState([]);
  const [triggerOrderRating, setTriggerOrderRating] = useState(false);
  const [triggerProductRating, setTriggerProductRating] = useState(false);

  const [orderDetailById, setOrderDetailById] = useState('');

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
        await axios.patch(`/purchase/order/${orderDetailId}/${customerId}`);
      } catch (err) {
        console.log(err);
      } finally {
        document.location.reload();
      }
    } else {
    }
  };

  const fetchOrderDetailById = async () => {
    try {
      const resOrderDetailById = await axios.get(
        `/purchase/order/detailById/${customerId}/${orderDetailId}`
      );
      setOrderDetailById(resOrderDetailById.data.orderDetailData);
    } catch (err) {
      console.log(err);
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

  const closeModal = () => {
    modal.hide();
  };

  const handleClickModal2 = () => {
    const modalObj = new Modal(modalEl2.current);
    setModal2(modalObj);
    modalObj.show();
    setTriggerProductRating(true);
  };

  const closeModal2 = () => {
    modal2.hide();
    setTriggerProductRating(false);
  };

  const handleClickModal3 = () => {
    const modalObj = new Modal(modalEl3.current);
    setModal3(modalObj);
    modalObj.show();
  };

  const closeModal3 = () => {
    modal3.hide();
  };

  const handleClickModal4 = () => {
    const modalObj = new Modal(modalEl4.current);
    setModal4(modalObj);
    modalObj.show();
    fetchOrderDetailById();
  };

  const closeModal4 = () => {
    modal4.hide();
  };

  const handleClickModal5 = () => {
    const modalObj = new Modal(modalEl5.current);
    setModal5(modalObj);
    modalObj.show();
    fetchOrderDetailById();
  };

  const closeModal5 = () => {
    modal5.hide();
  };

  const inputPostReviewContainer = {
    orderItem,
    closeModal,
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
          handleClickModal4={handleClickModal4}
          handleClickModal5={handleClickModal5}
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
                onClick={closeModal2}
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
                onClick={closeModal3}
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

      <div className="modal fade" tabIndex="-1" ref={modalEl4}>
        <div className="modal-dialog modal-dialog-centered modal">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">แจ้งการโอนเงิน</h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal4}
              ></button>
            </div>
            <div className="modal-body">
              {orderDetailById.length > 0
                ? orderDetailById.map((el) => (
                    <TransferMoneyContainer
                      key={el.orderDetailId}
                      orderDetailById={el}
                      customerId={customerId}
                      closeModal4={closeModal4}
                    />
                  ))
                : ''}
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" tabIndex="-1" ref={modalEl5}>
        <div className="modal-dialog modal-dialog-centered modal">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">สรุปการสั่งซื้อสินค้า</h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal5}
              ></button>
            </div>
            <div className="modal-body">
              {orderDetailById.length > 0
                ? orderDetailById.map((el) => (
                    <OrderResultFinal
                      key={el.orderDetailId}
                      orderDetailById={el}
                      orderItem={orderItem}
                      shopName={shopName}
                      closeModal4={closeModal5}
                    />
                  ))
                : ''}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderResultItem;
