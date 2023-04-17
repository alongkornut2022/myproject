import { useContext, useEffect, useState } from 'react';
import ProductItemBestBuy from './ProductItemBestBuy';
import axios from '../config/axios';

function ProductBestBuy() {
  const [productBestBuy, setProductBestBuy] = useState([]);

  const fetchProductBestBuy = async () => {
    try {
      const resProductBestBuy = await axios.get('/products/bestbuy');
      setProductBestBuy(resProductBestBuy.data.productBestBuy);
    } catch (err) {}
  };

  useEffect(() => {
    fetchProductBestBuy();
  }, []);

  return (
    <>
      {productBestBuy.map((el) => (
        <ProductItemBestBuy key={el.id} productBestBuy={el} />
      ))}
    </>
  );
}

export default ProductBestBuy;
