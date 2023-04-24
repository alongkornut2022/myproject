import { useEffect, useState } from 'react';
import ProductItemBestBuy from './productBestBuy/ProductItemBestBuy';
import axios from '../config/axios';

function ProductBestBuy() {
  const [productBestBuy, setProductBestBuy] = useState([]);

  const fetchProductBestBuy = async (limit, offset) => {
    try {
      const resProductBestBuy = await axios.get(
        `/products/bestbuy?limit=${limit}&&offset=${offset}&&orderBy=ps.alreadysold desc`
      );
      setProductBestBuy(resProductBestBuy.data.productBestBuy);
    } catch (err) {}
  };

  useEffect(() => {
    fetchProductBestBuy(20, 1);
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
