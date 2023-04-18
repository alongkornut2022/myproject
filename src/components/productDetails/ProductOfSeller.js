import { useEffect, useState } from 'react';
import ProductItemSeller from '../ProductItemSeller';
import axios from '../../config/axios';

function ProductOfSeller({ productItem }) {
  const [productSeller, setProductSeller] = useState([]);

  const { sellerId } = productItem;

  useEffect(() => {
    const fetchProductSeller = async () => {
      try {
        const resProductSeller = await axios.get(`/products/shop/${sellerId}`);
        setProductSeller(resProductSeller.data.productSeller);
      } catch (err) {}
    };
    fetchProductSeller();
  }, []);

  return (
    <>
      <div className="product_item_seller">
        {productSeller.map((el) => (
          <ProductItemSeller key={el.id} productSeller={el} />
        ))}
      </div>
    </>
  );
}

export default ProductOfSeller;
