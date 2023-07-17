import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../config/axiosSeller';

function SellerOrderProductItem({ orderItem }) {
  const {
    orderDetailId,
    customerId,
    productId,
    productName,
    image,
    amount,
    productUnitPrice,
    discounts,
    productItemTotalPrice,
  } = orderItem;

  const [productRatingReview, setProductRatingReview] = useState([]);
  const [comment, setComment] = useState([]);

  const fecthProductRatingReview = async () => {
    try {
      const resProductRatingReview = await axios.get(
        `/postreview/productreview/${orderDetailId}/${productId}/${customerId}`
      );
      setProductRatingReview(resProductRatingReview.data.productRatingReview);
      setComment(resProductRatingReview.data.comment);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fecthProductRatingReview();
  }, [orderItem]);

  const productItemTotalPriceNoDiscounts = productUnitPrice * amount;
  return (
    <>
      <div className="orderresult_item_product_main">
        <div className="orderresult_item_product_img">
          <Link end to={`/ProductDetail/${productId}`}>
            <img src={image} />
          </Link>
        </div>
        <div className="orderresult_item_product_title">
          <Link end to={`/ProductDetail/${productId}`}>
            <div>{productName} </div>
          </Link>
          <div className="order_item_product_title">
            <div className="sellerorder_item_product_title">
              <div>X {amount} ชิ้น</div>
              <div className="sellerorder_item_product_title_rating">
                <div
                  className="orderresult_item_product_review"
                  hidden={
                    productRatingReview.length > 0 || productRatingReview
                      ? ''
                      : 'hidden'
                  }
                >
                  <Link end to={`/ProductDetail/${productId}`}>
                    มีรีวิวสินค้า
                  </Link>
                </div>
                <div
                  className="orderresult_item_product_review"
                  hidden={
                    productRatingReview ? (comment ? '' : 'hidden') : 'hidden'
                  }
                >
                  / ตอบแล้ว
                </div>
                <div
                  className="orderresult_item_product_review"
                  hidden={
                    productRatingReview ? (comment ? 'hidden' : '') : 'hidden'
                  }
                >
                  / ยังไม่ตอบ
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="orderresult_item_product_price">
          <div
            className="orderresult_item_product_price_nodiscounts"
            hidden={discounts === null ? 'hidden' : ''}
          >
            ฿{productItemTotalPriceNoDiscounts}
          </div>
          <div className="orderresult_item_product_price_discounts">
            ฿{productItemTotalPrice}
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerOrderProductItem;
