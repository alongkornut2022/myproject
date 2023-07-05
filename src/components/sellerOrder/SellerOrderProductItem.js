import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../config/axiosSeller';

function SellerOrderProductItem({ orderItem }) {
  const {
    productId,
    productName,
    image,
    amount,
    productUnitPrice,
    discounts,
    productItemTotalPrice,
  } = orderItem;

  const [productRating, setProductRating] = useState([]);

  const fetchProductRating = async (rating) => {
    try {
      const resProductRating = await axios.get(
        `/postreview/product/${productId}?rating=${rating}`
      );
      setProductRating(resProductRating.data.productRating);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProductRating('All');
  }, []);

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
                  hidden={productRating.length > 0 ? '' : 'hidden'}
                >
                  <Link end to={`/ProductDetail/${productId}`}>
                    มีรีวิวสินค้า
                  </Link>
                </div>
                <div
                  className="orderresult_item_product_review"
                  hidden={
                    productRating.length > 0
                      ? productRating[0].comment
                        ? ''
                        : 'hidden'
                      : 'hidden'
                  }
                >
                  / ตอบแล้ว
                </div>
                <div
                  className="orderresult_item_product_review"
                  hidden={
                    productRating.length > 0
                      ? productRating[0].comment
                        ? 'hidden'
                        : ''
                      : 'hidden'
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
