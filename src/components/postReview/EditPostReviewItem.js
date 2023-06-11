import { useEffect, useRef, useState } from 'react';
import axios from '../../config/axios';

function EditPostReviewItem({
  orderDetailId,
  customerId,
  productId,
  productName,
  imageProduct,
  username,
  productRating,
  currentRating,
  currentPostReview,
  currentImages,
  displayUsername,
  setTrigger,
}) {
  const uploadImageEl = useRef();

  const [rating, setRating] = useState();
  const [quelity, setQuelity] = useState();
  const [postReview, setPostReview] = useState();
  const [imageReview, setImageReview] = useState();
  const [checkboxUsername, setCheckboxUsername] = useState();

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

  const handleOnClickImgaeReview = () => {
    uploadImageEl.current.click();
  };

  const handleOnClickSubmit = async () => {
    try {
      if (rating) {
        if (imageReview) {
          const formData = new FormData();
          formData.append('imageReview', imageReview);
          if (productRating.length > 0) {
            await axios.patch(
              `/postreview/${orderDetailId}/${productId}/${customerId}?rating=${rating}&&postReview=${postReview}&&checkboxUsername=${checkboxUsername}`,
              formData
            );
            alert('คุณให้คะแนนสินค้า  ' + productName + '  แล้ว');
          } else {
            await axios.post(
              `/postreview/${orderDetailId}/${productId}/${customerId}?rating=${rating}&&postReview=${postReview}&&checkboxUsername=${checkboxUsername}`,
              formData
            );
            alert('คุณให้คะแนนสินค้า  ' + productName + '  แล้ว');
          }
        } else {
          if (productRating.length > 0) {
            await axios.patch(
              `/postreview/${orderDetailId}/${productId}/${customerId}?rating=${rating}&&postReview=${postReview}&&checkboxUsername=${checkboxUsername}`
            );
            alert('คุณให้คะแนนสินค้า  ' + productName + '  แล้ว');
          } else {
            await axios.post(
              `/postreview/${orderDetailId}/${productId}/${customerId}?rating=${rating}&&postReview=${postReview}&&checkboxUsername=${checkboxUsername}`
            );
            alert('คุณให้คะแนนสินค้า  ' + productName + '  แล้ว');
          }
        }
      } else {
        alert('คุณยังไม่ได้ให้คะแนนสินค้า');
      }

      setTrigger(true);
    } catch (err) {
      console.log(err);
    }
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

  useEffect(() => {
    setRating(currentRating);
    setPostReview(currentPostReview);
    setCheckboxUsername(displayUsername);
  }, [currentRating, currentPostReview, displayUsername]);

  return (
    <div className="postreview_modal_item_container">
      <div className="postreview_modal_item_product">
        <div className="postreview_modal_item_product_image">
          <img src={imageProduct} />
        </div>
        <div className="postreview_modal_item_product_title">{productName}</div>
      </div>
      <div className="postreview_modal_item_quelity">
        <div className="postreview_modal_item_quelity_title">คุณภาพสินค้า</div>
        <div className="postreview_modal_item_quelity_rating">
          <input
            type="radio"
            name="rating"
            value="1"
            onClick={(event) => setRating(event.target.value)}
            checked={rating == 1 ? 'checked' : ''}
          />

          <input
            type="radio"
            name="rating"
            value="2"
            onClick={(event) => setRating(event.target.value)}
            checked={rating == 2 ? 'checked' : ''}
          />

          <input
            type="radio"
            name="rating"
            value="3"
            onClick={(event) => setRating(event.target.value)}
            checked={rating == 3 ? 'checked' : ''}
          />

          <input
            type="radio"
            name="rating"
            value="4"
            onClick={(event) => setRating(event.target.value)}
            checked={rating == 4 ? 'checked' : ''}
          />

          <input
            type="radio"
            name="rating"
            value="5"
            onClick={(event) => setRating(event.target.value)}
            checked={rating == 5 ? 'checked' : ''}
          />
        </div>
        <div className="postreview_modal_item_quelity_score">{quelity}</div>
      </div>
      <div className="postreview_modal_item_comment">
        <div className="postreview_modal_item_comment_textarea">
          <textarea
            rows="4"
            placeholder={
              productRating
                ? postReview
                : 'เขียนรีวิวสินค้า เช่น คุณภาพ รูปลักษณ์'
            }
            onChange={(event) => {
              setPostReview(event.target.value);
            }}
          />
        </div>
        <div className="postreview_modal_item_comment_file">
          <div className="postreview_modal_item_comment_file_image">
            {imageReview ? <img src={URL.createObjectURL(imageReview)} /> : ''}
            <img src={currentImages} />
          </div>
          <div className="postreview_modal_item_comment_file_handleimage">
            <div className="item1">
              <button type="button" onClick={handleOnClickImgaeReview}>
                <i class="fa-solid fa-camera fa-xl"></i> เพื่ม รูปภาพ
              </button>
            </div>
            <div className="item2">
              {imageReview ? (
                <button onClick={() => setImageReview(null)}>ลบรูปภาพ</button>
              ) : (
                ''
              )}
            </div>
          </div>

          <input
            type="file"
            ref={uploadImageEl}
            onChange={(event) => {
              if (event.target.files[0]) {
                setImageReview(event.target.files[0]);
              }
            }}
          />
        </div>
      </div>
      <div className="postreview_modal_item_product_userrevirw">
        <div className="postreview_modal_item_product_userrevirw_checkbox">
          <input
            type="checkbox"
            checked={checkboxUsername == 1 ? 'checked' : ''}
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
      </div>
    </div>
  );
}

export default EditPostReviewItem;
