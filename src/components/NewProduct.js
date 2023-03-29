import { useContext, useEffect, useState } from 'react';
import ProductItemNew from './ProductItemNew';
import axios from '../config/axios';
import { ErrorContext } from '../contexts/ErrorContext';

function NewProduct() {
  const [newProduct, setNewProduct] = useState([]);

  const { setError } = useContext(ErrorContext);

  const fetchNewProduct = async () => {
    try {
      const resNewProduct = await axios.get('/products/newproduct');
      setNewProduct(resNewProduct.data.newProduct);
    } catch (err) {
      setError(err.response.data.message);
    }
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
