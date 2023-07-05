import { Modal } from 'bootstrap';
import { useEffect, useRef, useState } from 'react';
import axios from '../../config/axios';
import EditPostReviewItem from './EditPostReviewItem';
import PostReviewItem from './PostReviewItem';

function SeePostReviewItem({
  orderItem,
  closeModal2,
  triggerOrderRating,
  setTriggerOrderRating,
  triggerProductRating,
  setTriggerProductRating,
}) {
  const {
    orderDetailId,
    customerId,
    productId,
    productName,
    image,
    username,
    userPicture,
  } = orderItem;

  const modalEl4 = useRef();
  const [modal4, setModal4] = useState(null);

  const modalEl5 = useRef();
  const [modal5, setModal5] = useState(null);

  const [productRating, setProductRating] = useState([]);

  let productRatingId;
  let postImagesId;
  let createdAtProductRating;

  if (productRating.length > 0) {
    productRatingId = productRating[0].productRatingId;
    postImagesId = productRating[0].postImagesId;
    createdAtProductRating = productRating[0].createdAt;
  } else {
    productRatingId = '';
    postImagesId = '';
    createdAtProductRating = '';
  }

  const date = new Date(createdAtProductRating);
  const day = date.getUTCDate();
  const monthNum = date.getUTCMonth();
  const month = monthNum + 1;
  const year = date.getUTCFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  useEffect(() => {
    const fetchProductRating = async () => {
      try {
        const resProductRating = await axios.get(
          `/postreview/${orderDetailId}/${productId}/${customerId}`
        );
        setProductRating(resProductRating.data.productRating);
        setTriggerProductRating(false);
        setTriggerOrderRating(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProductRating();
  }, [triggerProductRating, triggerOrderRating]);

  const deleteProductRating = async () => {
    if (
      window.confirm('คุณแน่ใจหรือว่า ต้องการ "ลบ คะแนนของร้านค้า" ? ') === true
    ) {
      try {
        if (postImagesId) {
          await axios.delete(
            `/postreview/images/${customerId}/${productRatingId}/${postImagesId}`
          );
          await axios.delete(`/postreview/${customerId}/${productRatingId}`);
        } else {
          await axios.delete(`/postreview/${customerId}/${productRatingId}`);
        }
        setTriggerOrderRating(true);
        setTriggerProductRating(true);
        // closeModal2();
      } catch (err) {
        console.log(err);
      }
    } else {
    }
  };

  const handleClickModal4 = () => {
    const modalObj = new Modal(modalEl4.current);
    setModal4(modalObj);
    modalObj.show();
    setTriggerProductRating(true);
  };
  const handleOnClickCloseModal4 = () => {
    closeModal4();
    setTriggerProductRating(false);
  };
  const closeModal4 = (event) => {
    modal4.hide();
    setTriggerProductRating(false);
  };

  const handleClickModal5 = () => {
    const modalObj = new Modal(modalEl5.current);
    setModal5(modalObj);
    modalObj.show();
    setTriggerOrderRating(true);
  };
  const handleOnClickCloseModal5 = () => {
    closeModal5();
    setTriggerOrderRating(false);
  };
  const closeModal5 = (event) => {
    modal5.hide();
    setTriggerOrderRating(false);
  };

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
            <button
              onClick={handleClickModal4}
              hidden={productRating.length > 0 ? '' : 'hidden'}
            >
              แก้ไข
            </button>
            <button
              onClick={handleClickModal5}
              hidden={productRating.length > 0 ? 'hidden' : ''}
            >
              ให้คะแนน
            </button>
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
            {productRating.length > 0
              ? day + '/' + month + '/' + year + ' ' + hour + ':' + minutes
              : ''}
          </div>
        </div>
      </div>

      <div className="modal fade" tabIndex="-1" ref={modalEl4}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">แก้ไขคะแนนสินค้า</h5>
            </div>

            <div className="modal-body">
              <EditPostReviewItem
                orderItem={orderItem}
                productRating={productRating.length > 0 ? productRating : ''}
                triggerProductRating={triggerProductRating}
                setTriggerProductRating={setTriggerProductRating}
                setTriggerOrderRating={setTriggerOrderRating}
                handleOnClickCloseModal4={handleOnClickCloseModal4}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" tabIndex="-1" ref={modalEl5}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">ให้คะแนนสินค้า</h5>
            </div>

            <div className="modal-body">
              <PostReviewItem
                orderItem={orderItem}
                closeModal={closeModal5}
                setTriggerOrderRating={setTriggerOrderRating}
                etTriggerProductRating={setTriggerProductRating}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeePostReviewItem;
