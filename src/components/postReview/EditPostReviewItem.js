import { useEffect, useState } from 'react';
import axios from '../../config/axios';
import PostReviewAddPhoto from './PostReviewAddPhoto';
import RadioRating from './RadioRating';

function EditPostReviewItem({
  orderItem,
  productRating,
  triggerProductRating,
  setTriggerProductRating,
  setTriggerOrderRating,
  handleOnClickCloseModal4,
}) {
  const {
    orderDetailId,
    customerId,
    productId,
    productName,
    image: imageProduct,
    username,
  } = orderItem;

  let usernameStr = '*';
  let i;
  for (i = 1; i < username.length - 2; i++) {
    usernameStr = usernameStr + '*';
  }

  let productRatingId;
  let currentRating;
  let currentPostReview;
  let postImagesId;
  let currentImageReview1;
  let currentImageReview2;
  let currentImageReview3;
  let currentImageReview4;
  let displayUsername;

  if (productRating.length > 0) {
    productRatingId = productRating[0].productRatingId;
    currentRating = productRating[0].rating;
    currentPostReview = productRating[0].postReview;
    postImagesId = productRating[0].postImagesId;
    currentImageReview1 = productRating[0].imageReview1;
    currentImageReview2 = productRating[0].imageReview2;
    currentImageReview3 = productRating[0].imageReview3;
    currentImageReview4 = productRating[0].imageReview4;
    displayUsername = productRating[0].displayUsername;
  } else {
    productRatingId = '';
    currentRating = '';
    currentPostReview = '';
    postImagesId = '';
    currentImageReview1 = '';
    currentImageReview2 = '';
    currentImageReview3 = '';
    currentImageReview4 = '';
    displayUsername = '';
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

  const [rating, setRating] = useState(currentRating);
  const [quelity, setQuelity] = useState();
  const [postReview, setPostReview] = useState(currentPostReview);
  const [checkboxUsername, setCheckboxUsername] = useState(displayUsername);

  const [imageReview1, setImageReview1] = useState(currentImageReview1);
  const [imageReview2, setImageReview2] = useState(currentImageReview2);
  const [imageReview3, setImageReview3] = useState(currentImageReview3);
  const [imageReview4, setImageReview4] = useState(currentImageReview4);

  console.log(postImagesId, rating, postReview, checkboxUsername);

  const handleOnClickSubmit = async () => {
    try {
      if (rating) {
        if (imageReview1 || imageReview2 || imageReview3 || imageReview4) {
          if (postImagesId) {
            console.log('0');

            const formData = new FormData();
            const indexImageUpdateArr = [];
            const indexImageNull = [];

            if (typeof imageReview1 === 'object' && imageReview1) {
              formData.append('imageReview', imageReview1);
              indexImageUpdateArr.push('0');
            } else if (imageReview1 === null) {
              indexImageNull.push('0');
            }

            if (typeof imageReview2 === 'object' && imageReview2) {
              formData.append('pimageReview', imageReview2);
              indexImageUpdateArr.push('1');
            } else if (imageReview2 === null) {
              indexImageNull.push('1');
            }

            if (typeof imageReview3 === 'object' && imageReview3) {
              formData.append('imageReview', imageReview3);
              indexImageUpdateArr.push('2');
            } else if (imageReview3 === null) {
              indexImageNull.push('2');
            }

            if (typeof imageReview4 === 'object' && imageReview4) {
              formData.append('imageReview', imageReview4);
              indexImageUpdateArr.push('3');
            } else if (imageReview4 === null) {
              indexImageNull.push('3');
            }

            const indexImageUpdateStr = indexImageUpdateArr.join(',');
            const indexImageNullStr = indexImageNull.join(',');

            await axios.patch(
              `/postreview/images/${customerId}/${productRatingId}/${postImagesId}?indexImageUpdateStr=${indexImageUpdateStr}&&indexImageNullStr=${indexImageNullStr}`,
              formData
            );

            await axios.patch(`/postreview/${customerId}/${productRatingId}`, {
              rating,
              postReview,
              checkboxUsername,
            });

            alert('คุณให้คะแนนสินค้า  ' + productName + '  แล้ว');
          } else {
            console.log('1');

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

            await axios.patch(`/postreview/${customerId}/${productRatingId}`, {
              rating,
              postReview,
              checkboxUsername,
              postImagesId: resPostImages.data.postImages.id,
            });
            alert('คุณให้คะแนนสินค้า  ' + productName + '  แล้ว');
          }
        } else {
          console.log('2');
          if (postImagesId) {
            await axios.delete(
              `/postview/images/${customerId}/${productRatingId}/${postImagesId}`
            );
            await axios.patch(`/postreview/${customerId}/${productRatingId}`, {
              rating,
              postReview,
              checkboxUsername,
            });
            alert('คุณให้คะแนนสินค้า  ' + productName + '  แล้ว');
          } else {
            console.log('3');
            await axios.patch(`/postreview/${customerId}/${productRatingId}`, {
              rating,
              postReview,
              checkboxUsername,
            });
            alert('คุณให้คะแนนสินค้า  ' + productName + '  แล้ว');
          }
        }
      } else {
        alert('คุณยังไม่ได้ให้คะแนนสินค้า');
      }

      setTriggerOrderRating(true);
      setTriggerProductRating(true);
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

  const handleOnClickCancel = () => {
    handleOnClickCloseModal4();
    setRating(currentRating);
    setPostReview(currentPostReview);
    setCheckboxUsername(displayUsername);
    setImageReview1(currentImageReview1);
    setImageReview2(currentImageReview2);
    setImageReview3(currentImageReview3);
    setImageReview4(currentImageReview4);
  };

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
          <img src={imageProduct} />
        </div>
        <div className="postreview_modal_item_product_title">{productName}</div>
      </div>
      <div className="postreview_modal_item_quelity">
        <RadioRating rating={rating} setRating={setRating} quelity={quelity} />
      </div>
      <div className="postreview_modal_item_comment">
        <div className="postreview_modal_item_comment_textarea">
          <textarea
            value={postReview}
            rows="4"
            placeholder={
              productRating
                ? postReview
                  ? postReview
                  : 'เขียนรีวิวสินค้า เช่น คุณภาพ รูปลักษณ์'
                : 'เขียนรีวิวสินค้า เช่น คุณภาพ รูปลักษณ์'
            }
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
        <button onClick={handleOnClickCancel}>ปิด</button>
      </div>
    </div>
  );
}

export default EditPostReviewItem;
