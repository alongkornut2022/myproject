import { useEffect, useState } from 'react';
import axios from '../../config/axios';
import PostReviewAddPhoto from './PostReviewAddPhoto';
import RadioRating from './RadioRating';
import Spinner from '../Spinner';

function EditPostReviewItem({
  orderItem,
  productRating,
  closeModal4,
  closeModal2,
  fetchProductRating,
}) {
  const { customerId, productName, image: imageProduct, username } = orderItem;

  const [rating, setRating] = useState();
  const [quelity, setQuelity] = useState();
  const [postReview, setPostReview] = useState();
  const [checkboxUsername, setCheckboxUsername] = useState();
  const [imageReview1, setImageReview1] = useState();
  const [imageReview2, setImageReview2] = useState();
  const [imageReview3, setImageReview3] = useState();
  const [imageReview4, setImageReview4] = useState();
  const [loading, setLoading] = useState(false);

  const productRatingId =
    productRating.length > 0 ? productRating[0].productRatingId : '';
  const currentRating = productRating.length > 0 ? productRating[0].rating : '';
  const currentPostReview =
    productRating.length > 0 ? productRating[0].postReview : '';
  const postImagesId =
    productRating.length > 0 ? productRating[0].postImagesId : '';
  const currentImageReview1 =
    productRating.length > 0 ? productRating[0].imageReview1 : '';
  const currentImageReview2 =
    productRating.length > 0 ? productRating[0].imageReview2 : '';
  const currentImageReview3 =
    productRating.length > 0 ? productRating[0].imageReview3 : '';
  const currentImageReview4 =
    productRating.length > 0 ? productRating[0].imageReview4 : '';
  const displayUsername =
    productRating.length > 0 ? productRating[0].displayUsername : '';

  const currentProductRating = () => {
    setRating(currentRating);
    setPostReview(currentPostReview);
    setCheckboxUsername(displayUsername);
    setImageReview1(currentImageReview1);
    setImageReview2(currentImageReview2);
    setImageReview3(currentImageReview3);
    setImageReview4(currentImageReview4);
  };

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

  const handleCheckboxUsername = (event) => {
    if (event.currentTarget.checked) {
      setCheckboxUsername(1);
    } else {
      setCheckboxUsername(0);
    }
  };

  let usernameStr = '*';
  let i;
  for (i = 1; i < username.length - 2; i++) {
    usernameStr = usernameStr + '*';
  }

  const handleOnClickSubmit = async () => {
    try {
      setLoading(true);
      if (rating) {
        if (imageReview1 || imageReview2 || imageReview3 || imageReview4) {
          if (imageReview1 === null) {
            alert('กรุณาเลือกรูปภาพที่ 1 ก่อน');
          } else {
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
              } else {
              }

              if (typeof imageReview2 === 'object' && imageReview2) {
                formData.append('pimageReview', imageReview2);
                indexImageUpdateArr.push('1');
              } else if (imageReview2 === null) {
                indexImageNull.push('1');
              } else {
              }

              if (typeof imageReview3 === 'object' && imageReview3) {
                formData.append('imageReview', imageReview3);
                indexImageUpdateArr.push('2');
              } else if (imageReview3 === null) {
                indexImageNull.push('2');
              } else {
              }

              if (typeof imageReview4 === 'object' && imageReview4) {
                formData.append('imageReview', imageReview4);
                indexImageUpdateArr.push('3');
              } else if (imageReview4 === null) {
                indexImageNull.push('3');
              } else {
              }

              const indexImageUpdateStr = indexImageUpdateArr.join(',');
              const indexImageNullStr = indexImageNull.join(',');

              await axios.patch(
                `/postreview/images/${customerId}/${productRatingId}/${postImagesId}?indexImageUpdateStr=${indexImageUpdateStr}&&indexImageNullStr=${indexImageNullStr}`,
                formData
              );

              await axios.patch(
                `/postreview/${customerId}/${productRatingId}`,
                {
                  rating,
                  postReview,
                  checkboxUsername,
                }
              );
              alert('คุณให้คะแนนสินค้า  ' + productName + '  แล้ว');
              fetchProductRating();
              closeModal4();
              closeModal2();
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

              await axios.patch(
                `/postreview/${customerId}/${productRatingId}`,
                {
                  rating,
                  postReview,
                  checkboxUsername,
                  postImagesId: resPostImages.data.postImages.id,
                }
              );
              alert('คุณให้คะแนนสินค้า  ' + productName + '  แล้ว');
              fetchProductRating();
              closeModal4();
              closeModal2();
            }
          }
        } else {
          console.log('2');
          if (postImagesId) {
            await axios.delete(
              `/postreview/images/${customerId}/${productRatingId}/${postImagesId}`
            );

            await axios.patch(`/postreview/${customerId}/${productRatingId}`, {
              rating,
              postReview,
              checkboxUsername,
            });
            alert('คุณให้คะแนนสินค้า  ' + productName + '  แล้ว');
            fetchProductRating();
            closeModal4();
            closeModal2();
          } else {
            console.log('3');
            await axios.patch(`/postreview/${customerId}/${productRatingId}`, {
              rating,
              postReview,
              checkboxUsername,
            });
            alert('คุณให้คะแนนสินค้า  ' + productName + '  แล้ว');
            fetchProductRating();
            closeModal4();
            closeModal2();
          }
        }
      } else {
        alert('คุณยังไม่ได้ให้คะแนนสินค้า');
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    showQuelity();
  }, [rating]);

  const handleOnClickCancel = () => {
    closeModal4();
    currentProductRating();
  };

  useEffect(() => {
    currentProductRating();
  }, [productRating]);

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
        <Spinner loading={loading} />
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
