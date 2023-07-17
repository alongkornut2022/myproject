import { useEffect, useState } from 'react';
import ProductItemNew from './productNew/ProductItemNew';
import axios from '../config/axios';

function NewProduct() {
  const [newProduct, setNewProduct] = useState([]);

  const fetchNewProduct = async (limit, offset) => {
    try {
      const resNewProduct = await axios.get(
        `/products/sort?limit=${limit}&&offset=${offset}&&orderBy=ps.created_at desc`
      );
      setNewProduct(resNewProduct.data.productSort);
    } catch (err) {}
  };

  useEffect(() => {
    fetchNewProduct(24, 1);
  }, []);

  return (
    <>
      {newProduct.map((el) => (
        <ProductItemNew key={el.id} newProduct={el} />
      ))}
    </>
  );
}

export default NewProduct;
