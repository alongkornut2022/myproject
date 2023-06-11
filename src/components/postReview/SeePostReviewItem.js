import { Modal } from 'bootstrap';
import { useEffect, useRef, useState } from 'react';
import axios from '../../config/axios';

import EditPostReviewContain from './EditPostReviewContain';

function SeePostReviewItem({ orderItem, closeModal2, setTrigger, trigger }) {
  const {
    orderDetailId,
    customerId,
    productId,
    productName,
    image,
    username,
    userPicture,
    createdAt,
  } = orderItem;

  const [productRating, setProductRating] = useState([]);

  console.log('see edit', productRating);

  const modalEl = useRef();
  const [modal, setModal] = useState(null);

  const fetchProductRating = async () => {
    try {
      const resProductRating = await axios.get(
        `/postreview/${orderDetailId}/${productId}/${customerId}`
      );
      setProductRating(resProductRating.data.productRating);
      setTrigger(false);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProductRating = async () => {
    if (
      window.confirm('คุณแน่ใจหรือว่า ต้องการ "ลบ คะแนนของร้านค้า" ? ') === true
    ) {
      try {
        await axios.delete(
          `/postreview/${orderDetailId}/${productId}/${customerId}`
        );
        setTrigger(true);
      } catch (err) {
        console.log(err);
      }
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
  const closeModal = (event) => {
    modal.hide();
  };

  useEffect(() => {
    fetchProductRating();
  }, [trigger]);

  return (
    <div className="editpostreview_modal_item_container">
      <div className="editpostreview_modal_item_top">
        <div className="editpostreview_modal_item_product">
          <div className="editpostreview_modal_item_product_img">
            <img src={image} />
          </div>
          <div className="editpostreview_modal_item_product_name">
            {productName}
          </div>
        </div>
        <div className="editpostreview_modal_item_top_button">
          <div className="editpostreview_modal_item_top_button_edit">
            <button onClick={handleClickModal}>แก้ไข</button>
          </div>
          <div className="editpostreview_modal_item_top_button_delete">
            {productRating.length > 0 ? (
              <button onClick={deleteProductRating}>ลบ</button>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <div className="editpostreview_modal_item_buttom">
        <div className="editpostreview_modal_item_customer_left">
          <img src={userPicture} />
        </div>
        <div className="editpostreview_modal_item_customer_right">
          <div className="editpostreview_modal_item_customer_username">
            {username}
          </div>
          <div className="editpostreview_modal_item_customer_rating">
            {productRating.length > 0
              ? productRating[0].rating + ' ' + ' '
              : 'ยังไม่ได้ให้'}
            คะแนน
          </div>
          <div className="editpostreview_modal_item_customer_date">
            {productRating.length > 0 ? productRating[0].createdAt : ''}
          </div>
        </div>
      </div>

      <div className="modal fade" tabIndex="-1" ref={modalEl}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">ให้คะแนนสินค้า</h5>
              <button
                className="btn-close"
                onClick={handleOnClickCloseModal}
              ></button>
            </div>

            <div className="modal-body">
              <EditPostReviewContain
                orderDetailId={orderDetailId}
                customerId={customerId}
                productId={productId}
                productName={productName}
                imageProduct={image}
                username={username}
                productRating={productRating.length > 0 ? productRating : ''}
                currentRating={
                  productRating.length > 0 ? productRating[0].rating : ''
                }
                currentPostReview={
                  productRating.length > 0 ? productRating[0].postReview : ''
                }
                currentImages={
                  productRating.length > 0 ? productRating[0].image1 : ''
                }
                displayUsername={
                  productRating.length > 0
                    ? productRating[0].displayUsername
                    : ''
                }
                setTrigger={setTrigger}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeePostReviewItem;
