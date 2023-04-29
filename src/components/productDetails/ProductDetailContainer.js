import { useContext, useEffect, useState } from 'react';
import ProductItemDescription from './ProductItemDescription';
import ProductItemImages from './ProductItemImages';
import ProductItemTitle from './ProductItemTitle';
import axios from '../../config/axios';
import ProductRating from '../../components/productReview/ProductRating';
import DataSeller from './DataSeller';
import ProductOfSeller from './ProductOfSeller';
import ProductOfCustomer from './ProductOfCustomer';
import ProductHeader from './ProductHeader';
import { AuthContext } from '../../contexts/AuthContext';

function ProductDetailContainer({ productId }) {
  const { customer } = useContext(AuthContext);
  const [productItem, setProductItem] = useState([]);
  const [productSpecs, setProductSpecs] = useState('');

  useEffect(() => {
    const fetchProductItem = async () => {
      try {
        const resProductItem = await axios.get(`/products/${productId}`);
        setProductItem(resProductItem.data.productItem);
        setProductSpecs(resProductItem.data.productSpecs);
      } catch (err) {}
    };
    fetchProductItem();
  }, [productId]);

  return (
    <>
      <div className="productdetail_main_header">
        {productItem.map((el) => (
          <ProductHeader key={el.id} productItem={el} />
        ))}
      </div>
      <div className="productdetail_main_content_top">
        <div className="productitem_image">
          {productItem.map((el) => (
            <ProductItemImages
              key={el.id}
              productItem={el}
              size="90"
              sizeMain="500"
            />
          ))}
        </div>
        <div className="productitem_title">
          {productItem.map((el) => (
            <ProductItemTitle key={el.id} productItem={el} />
          ))}
        </div>
      </div>

      <div className="productitem_seller">
        {productItem.map((el) => (
          <DataSeller key={el.id} productItem={el} />
        ))}
      </div>

      <div className="productdetail_detail">
        {productItem.map((el) => (
          <ProductItemDescription
            key={el.id}
            productItem={el}
            productSpecs={productSpecs}
          />
        ))}
      </div>

      <div className="productdetail_rating">
        {productItem.map((el) => (
          <ProductRating key={el.id} productItem={el} />
        ))}
      </div>

      <div className="product_of_seller">
        <div>
          <h4>สินค้าจากร้านเดียวกัน</h4>
        </div>
        <br></br>
        <div>
          {productItem.map((el) => (
            <ProductOfSeller key={el.id} productItem={el} />
          ))}
        </div>
      </div>

      <div className="product_of_customer">
        <ProductOfCustomer />
      </div>
    </>
  );
}

export default ProductDetailContainer;
