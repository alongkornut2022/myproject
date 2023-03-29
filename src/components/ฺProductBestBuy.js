import { useContext, useEffect, useState } from 'react';
import ProductItemBestBuy from './ProductItemBestBuy';
import axios from '../config/axios';
import { ErrorContext } from '../contexts/ErrorContext';

function ProductBestBuy() {
  const [productBestBuy, setProductBestBuy] = useState([]);

  const { setError } = useContext(ErrorContext);

  const fetchProductBestBuy = async () => {
    try {
      const resProductBestBuy = await axios.get('/products/bestbuy');
      setProductBestBuy(resProductBestBuy.data.productBestBuy);
    } catch (err) {
      setError(err.response.data.message);
    }
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
