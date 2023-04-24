import { NavLink } from 'react-router-dom';
import ProductItemCard from '../ProductItemCard';

function ProductItemNew({ newProduct }) {
  const {
    productId,
    productName,
    productUnitprice,
    alreadysold,
    image1,
    createdAt,
  } = newProduct;

  const productItems = {
    productName,
    productUnitprice,
    alreadysold,
    image1,
    createdAt,
    createdAt,
  };

  return (
    <>
      <NavLink end to={`/ProductDetail/${productId}`}>
        <ProductItemCard productItems={productItems} />
      </NavLink>
    </>
  );
}

export default ProductItemNew;
