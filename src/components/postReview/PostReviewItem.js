import { useEffect, useState } from 'react';
import axios from '../../config/axios';
import PostReviewAddPhoto from './PostReviewAddPhoto';
import RadioRating from './RadioRating';

function PostReviewItem({
  orderItem,
  closeModal,
  setTriggerOrderRating,
  setTriggerProductRating,
}) {
  const { orderDetailId, customerId, productId, productName, image, username } =
    orderItem;

  const [rating, setRating] = useState(null);
  const [quelity, setQuelity] = useState(null);
  const [postReview, setPostReview] = useState('');
  const [checkboxUsername, setCheckboxUsername] = useState(0);

  const [imageReview1, setImageReview1] = useState(null);
  const [imageReview2, setImageReview2] = useState(null);
  const [imageReview3, setImageReview3] = useState(null);
  const [imageReview4, setImageReview4] = useState(null);

  let usernameStr = '*';
  let i;
  for (i = 1; i < username.length - 2; i++) {
    usernameStr = usernameStr + '*';
  }

  const showQuelity = () => {
    if (rating == 1) {
      setQuelity('ควรปรับปรุง');
    } else if (rating == 2) {
      setQuelity('ปานกลาง');
    } else if (rating == 3) {
      setQuelity('ค่อนข้างดี');
    } else if (rating == 4) {
      setQuelity('ดี');
    } else if (rating == 5) {
      setQuelity('ยอดเยี่ยม');
    }
  };

  const handleOnClickSubmit = async () => {
    try {
      if (rating) {
        if (imageReview1 || imageReview2 || imageReview3 || imageReview4) {
          if (imageReview1 === null) {
            alert('กรุณาเลือกรูปภาพที่ 1 ก่อน');
          } else {
            const formData = new FormData();
            if (imageReview1) {
              formData.append('imageReview', imageReview1);
            }
            if (imageReview2) {
              formData.append('imageReview', imageReview2);
            }
            if (imageReview3) {
              formData.append('imageReview', imageReview3);
            }
            if (imageReview4) {
              formData.append('imageReview', imageReview4);
            }

            const resPostImages = await axios.post(
              `/postreview/images/${customerId}`,
              formData
            );

            await axios.post(
              `/postreview/${orderDetailId}/${productId}/${customerId}`,
              {
                rating,
                checkboxUsername,
                postReview,
                postImagesId: resPostImages.data.postImages.id,
              }
            );
            alert('คุณให้คะแนนสินค้า  ' + productName + '  แล้ว');
            setTriggerOrderRating(true);
            setTriggerProductRating(true);
            handleOnClickClose();
          }
        } else {
          await axios.post(
            `/postreview/${orderDetailId}/${productId}/${customerId}`,
            { rating, checkboxUsername, postReview }
          );
          alert('คุณให้คะแนนสินค้า  ' + productName + '  แล้ว');
          setTriggerOrderRating(true);
          setTriggerProductRating(true);
          handleOnClickClose();
        }
      } else {
        alert('คุณยังไม่ได้ให้คะแนนสินค้า');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnClickClose = () => {
    closeModal();
    setRating(null);
    setQuelity(null);
    setPostReview('');
    setCheckboxUsername(0);
    setImageReview1(null);
    setImageReview2(null);
    setImageReview3(null);
    setImageReview4(null);
    setTriggerOrderRating(false);
  };

  const handleCheckboxUsername = (event) => {
    if (event.currentTarget.checked) {
      setCheckboxUsername(1);
    } else {
      setCheckboxUsername(0);
    }
  };

  useEffect(() => {
    showQuelity();
  }, [rating]);

  const dataInputAddPhoto = {
    imageReview1,
    setImageReview1,
    imageReview2,
    setImageReview2,
    imageReview3,
    setImageReview3,
    imageReview4,
    setImageReview4,
  };

  return (
    <div className="postreview_modal_item_container">
      <div className="postreview_modal_item_product">
        <div className="postreview_modal_item_product_image">
          <img src={image} />
        </div>
        <div className="postreview_modal_item_product_title">{productName}</div>
      </div>
      <div className="postreview_modal_item_quelity">
        <RadioRating rating={rating} setRating={setRating} quelity={quelity} />
      </div>
      <div className="postreview_modal_item_comment">
        <div className="postreview_modal_item_comment_textarea">
          <textarea
            rows="4"
            placeholder="เขียนรีวิวสินค้า เช่น คุณภาพ รูปลักษณ์"
            value={postReview}
            onChange={(event) => {
              setPostReview(event.target.value);
            }}
          />
        </div>

        <PostReviewAddPhoto dataInputAddPhoto={dataInputAddPhoto} />
      </div>
      <div className="postreview_modal_item_product_userrevirw">
        <div className="postreview_modal_item_product_userrevirw_checkbox">
          <input
            type="checkbox"
            checked={checkboxUsername === 1 ? 'checked' : ''}
            onClick={(event) => handleCheckboxUsername(event)}
          />
        </div>
        <div className="postreview_modal_item_product_userrevirw_customer">
          <div className="item1">แสดงชื่อผู้ใช้ในรีวิว</div>
          <div className="item2">
            {username[0] + usernameStr + username[username.length - 1]}
          </div>
        </div>
      </div>
      <div className="postreview_modal_item_submit">
        <button onClick={handleOnClickSubmit}>ยืนยัน</button>
        <button onClick={handleOnClickClose}>ปิด</button>
      </div>
    </div>
  );
}

export default PostReviewItem;
