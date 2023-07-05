import { useEffect, useState } from 'react';
import axios from '../../config/axios';
import ProductDetailReviewItem from '../ProductDetailReviewItem';
import ProductRatingNavBar from './ProductRatingNavBar';

function ProductRating({ productId }) {
  const [productRating, setProductRating] = useState([]);
  const [ratingBar, setRatingBar] = useState();
  const [trigerRating, setTrigerRating] = useState(false);

  const fetchProductRating = async (rating) => {
    try {
      const resProductRating = await axios.get(
        `/postreview/product/${productId}?rating=${rating}`
      );
      setProductRating(resProductRating.data.productRating);
      setRatingBar(rating);
      setTrigerRating(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProductRating('All');
  }, [trigerRating]);

  return (
    <>
      <div className="productdetail_rating_title">
        <h4>คะแนนของสินค้า</h4>
      </div>
      <div className="productdetail_rating_navbar">
        <ProductRatingNavBar
          fetchProductRating={fetchProductRating}
          ratingBar={ratingBar}
        />
      </div>
      <div className="productdetail_review">
        {productRating.map((el) => (
          <ProductDetailReviewItem
            key={el.id}
            productRating={el}
            setTrigerRating={setTrigerRating}
          />
        ))}
      </div>
    </>
  );
}

export default ProductRating;
