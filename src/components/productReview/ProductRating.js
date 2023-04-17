import ProductDetailReviewItem from '../ProductDetailReviewItem';

function ProductRating() {
  return (
    <>
      <div className="rating_title">
        <h4>คะแนนของสินค้า</h4>
      </div>
      <div className="rating_main">
        <div className="rating_left"></div>
        <div className="rating_right"></div>
      </div>
      <div className="productdetail_review">
        <ProductDetailReviewItem />
      </div>
    </>
  );
}

export default ProductRating;
