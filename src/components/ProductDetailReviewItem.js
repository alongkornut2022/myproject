import UserItemReview from './UserItemReview';

function ProductDetailReviewItem({ productRating }) {
  const {
    username,
    userPicture,
    rating,
    postReview,
    image1,
    image2,
    image3,
    image4,
    displayUsername,
    createdAt,
  } = productRating;

  const date = new Date(createdAt);
  const day = date.getUTCDate();
  const monthNum = date.getUTCMonth();
  const monthNameEng = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = monthNameEng[monthNum];
  const year = date.getUTCFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return (
    <>
      <div className="review_main">
        <div className="review_left">
          <UserItemReview
            size="40"
            username={username}
            src={userPicture}
            displayUsername={displayUsername == 1 ? displayUsername : ''}
          />
        </div>
        <div className="review_right">
          <div>คะแนนสินค้าที่ลูกค้าให้ {rating}</div>
          <div>
            {day} {month} {year} {hour}:{minutes}
          </div>
          <div>{postReview}</div>
          <div className="review_image_main">
            <div className="review_image_item1">
              {image1 ? <img src={image1} /> : ''}
              {image2 ? <img src={image2} /> : ''}
              {image3 ? <img src={image3} /> : ''}
              {image4 ? <img src={image4} /> : ''}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailReviewItem;
