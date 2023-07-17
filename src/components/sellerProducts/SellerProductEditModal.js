import { useEffect, useState } from 'react';
import axios from '../../config/axiosSeller';
import SellerProductEditContainer from './SellerProductEditContainer';

function SellerProductEditModal({
  seller,
  productId,
  modal,
  fetchProductSeller,
  navBar,
}) {
  const [productItem, setProductItem] = useState([]);
  const [productSpecInput, setProductSpecInput] = useState([]);

  const fetchProductItem = async () => {
    try {
      const resProductItem = await axios.get(`products/byid/${productId}`);
      setProductItem(resProductItem.data.productItem);
      setProductSpecInput(resProductItem.data.productSpecs);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProductItem();
  }, [productId]);

  return (
    <>
      {productItem.map((el) => (
        <SellerProductEditContainer
          key={el.id}
          productItem={el}
          seller={seller}
          productSpecInput={productSpecInput}
          modal={modal}
          productId={productId}
          fetchProductSeller={fetchProductSeller}
          navBar={navBar}
        />
      ))}
    </>
  );
}

export default SellerProductEditModal;
