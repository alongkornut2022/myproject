import { NavLink } from 'react-router-dom';
import ProductItemCard from '../ProductItemCard';

function ProductItemCategory({ productByCategory }) {
  const {
    productId,
    productName,
    productUnitprice,
    alreadysold,
    image1,
    inventory,
    createdAt,
  } = productByCategory;

  const productItems = {
    productName,
    productUnitprice,
    alreadysold,
    image1,
    inventory,
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

export default ProductItemCategory;
