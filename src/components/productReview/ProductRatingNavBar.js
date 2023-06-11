function ProductRatingNavBar({ fetchProductRating, ratingBar }) {
  return (
    <>
      <div className="productdetail_rating_navbar_left">
        <div>คะแนนเต็ม 5</div>
        <div>star</div>
      </div>
      <div className="productdetail_rating_navbar_right">
        <div
          className={
            ratingBar === 'All' ? 'productdetail_rating_navbar_button' : ''
          }
        >
          <button onClick={() => fetchProductRating('All')}>ทั้งหมด</button>
        </div>
        <div
          className={
            ratingBar === 5 ? 'productdetail_rating_navbar_button' : ''
          }
        >
          <button onClick={() => fetchProductRating(5)}>5 ดาว</button>
        </div>
        <div
          className={
            ratingBar === 4 ? 'productdetail_rating_navbar_button' : ''
          }
        >
          <button onClick={() => fetchProductRating(4)}>4 ดาว</button>
        </div>
        <div
          className={
            ratingBar === 3 ? 'productdetail_rating_navbar_button' : ''
          }
        >
          <button onClick={() => fetchProductRating(3)}>3 ดาว</button>
        </div>
        <div
          className={
            ratingBar === 2 ? 'productdetail_rating_navbar_button' : ''
          }
        >
          <button onClick={() => fetchProductRating(2)}>2 ดาว</button>
        </div>
        <div
          className={
            ratingBar === 1 ? 'productdetail_rating_navbar_button' : ''
          }
        >
          <button onClick={() => fetchProductRating(1)}>1 ดาว</button>
        </div>
      </div>
    </>
  );
}

export default ProductRatingNavBar;
