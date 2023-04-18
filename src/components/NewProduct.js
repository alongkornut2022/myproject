import { useEffect, useState } from 'react';
import ProductItemNew from './productNew/ProductItemNew';
import axios from '../config/axios';

function NewProduct() {
  const [newProduct, setNewProduct] = useState([]);

  const fetchNewProduct = async () => {
    try {
      const resNewProduct = await axios.get('/products/newproduct');
      setNewProduct(resNewProduct.data.newProduct);
    } catch (err) {}
  };

  useEffect(() => {
    fetchNewProduct();
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
