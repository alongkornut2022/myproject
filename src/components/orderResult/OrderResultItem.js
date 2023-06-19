import { useEffect, useRef, useState } from 'react';
import axios from '../../config/axios';
import OrderResultProductItem from './OrderResultProductItem';
import { Modal } from 'bootstrap';
import PostReviewContainer from '../postReview/PostReviewContainer';
import SeePostReviewContainer from '../postReview/SeePostReviewContainer';
import BuyAgainContainer from '../postReview/BuyAgainContainer';

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
  const [productRating, setProductRating] = useState([]);

  // console.log('order', productRating);

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

  const handleClickModal2 = () => {
    const modalObj = new Modal(modalEl2.current);
    setModal2(modalObj);
    modalObj.show();
  };
  const handleOnClickCloseModal2 = () => {
    closeModal2();
  };
  const closeModal2 = (event) => {
    modal2.hide();
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
    setProductRating,
  };

  return (
    <>
      <div className="orderresult_container_item_main">
        <div className="orderresult_item_top">
          <div className="orderresult_item_seller">
            <div className="orderresult_item_seller_left">
              ร้านค้า : {shopName}
            </div>
            <div className="orderresult_item_seller_right">
              {status === 'อยู่ระหว่างจัดส่ง' ? (
                <div className="orderresult_item_seller_right_item">
                  <div className="orderresult_item_seller_right_item_item1">
                    {'หมายเลขคำสั่งซื้อ : ' + ' ' + orderDetailId + ' ' + ''}
                  </div>
                  | บริษัทขนส่งกำลังนำส่งพัสดุให้คุณ
                </div>
              ) : (
                ''
              )}
              {status === 'จัดส่งสำเร็จ' ? (
                <div className="orderresult_item_seller_right_item">
                  <div className="orderresult_item_seller_right_item_item1">
                    {'หมายเลขคำสั่งซื้อ : ' +
                      ' ' +
                      orderDetailId +
                      ' ' +
                      ' ' +
                      '| จัดส่งสำเร็จ '}
                  </div>

                  {productRating.length > 0 ? (
                    ' | ให้คะแนนแล้ว'
                  ) : (
                    <button onClick={handleClickModal}>
                      | ยังไม่ได้ให้คะแนน
                    </button>
                  )}
                </div>
              ) : (
                ''
              )}
              {status === 'รอชำระเงิน' ? (
                <div className="orderresult_item_seller_right_item">
                  | รอชำระเงิน
                </div>
              ) : (
                ''
              )}
              {status === 'ชำระเงินแล้ว' ? (
                <div className="orderresult_item_seller_right_item">
                  | ชำระเงินแล้ว
                </div>
              ) : (
                ''
              )}
              {status === 'รออนุมัติ' ? (
                <div className="orderresult_item_seller_right_item">
                  | รออนุมัติ
                </div>
              ) : (
                ''
              )}
              {status === 'อนุมัติแล้ว' ? (
                <div className="orderresult_item_seller_right_item">
                  | อนุมัติแล้ว
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="orderresult_item_product">
            {orderItem.map((el) => (
              <OrderResultProductItem key={el.id} orderItem={el} />
            ))}
          </div>
        </div>
        <div className="orderresult_item_delivery">
          <div className="orderresult_item_delivery_title">ค่าจัดส่ง : </div>
          <div className="orderresult_item_delivery_price">
            ฿ {deliveryPrice}
          </div>
        </div>
        <div className="orderresult_item_middle">
          <div className="orderresult_item_price_title">รวมการสั่งซื้อ : </div>
          <div className="orderresult_item_price_amount">฿ {allTotalPrice}</div>
        </div>

        <div className="orderresult_item_buttom">
          {status === 'อยู่ระหว่างจัดส่ง' || status === 'จัดส่งสำเร็จ' ? (
            ''
          ) : paymentMethod === 'ชำระเงินปลายทาง' ? (
            <div className="orderresult_item_buttom_standby">
              <div className="orderresult_item_buttom_standby_item">
                เก็บเงินปลายทาง
              </div>
              <button>รออนุมัติ</button>
            </div>
          ) : (
            <div
              className={
                status === 'ชำระเงินแล้ว'
                  ? 'orderresult_item_buttom_money2'
                  : 'orderresult_item_buttom_money'
              }
            >
              <div className="orderresult_item_buttom_payment">
                {status === 'ชำระเงินแล้ว'
                  ? 'ชำระเงินแล้วผ่าน ' + paymentMethod
                  : 'ชำระเงินผ่าน'}
              </div>
              <button hidden={status === 'ชำระเงินแล้ว' ? 'hidden' : ''}>
                {paymentMethod}
              </button>
            </div>
          )}

          {status === 'อยู่ระหว่างจัดส่ง' || status === 'จัดส่งสำเร็จ' ? (
            ''
          ) : (
            <button onClick={handleOnClickDeleteOrder}>ยกเลิกคำสั่งซื้อ</button>
          )}

          {status === 'จัดส่งสำเร็จ' ? (
            <button onClick={handleClickModal3}>สั่งซื้ออีกครั้ง</button>
          ) : (
            ''
          )}

          {status === 'จัดส่งสำเร็จ' ? (
            <button onClick={handleClickModal2}>ดูคะแนนร้านค้า</button>
          ) : (
            ''
          )}
        </div>
      </div>

      <div className="modal fade" tabIndex="-1" ref={modalEl}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">ให้คะแนนสินค้า</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleOnClickCloseModal}
              ></button>
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
              <h5 className="modal-title">คะแนนของร้านค้า</h5>
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
                customerId={customerId}
                orderDetailId={orderDetailId}
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
