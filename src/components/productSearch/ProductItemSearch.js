import { Link } from 'react-router-dom';
import ProductItemCard from '../ProductItemCard';

function ProductItemSearch({ productSearch }) {
  const {
    productId,
    image1,
    productName,
    productUnitprice,
    alreadysold,
    discounts,
  } = productSearch;

  const productItems = {
    image1,
    productName,
    productUnitprice,
    alreadysold,
    discounts,
  };
  return (
    <>
      <Link end to={`/ProductDetail/${productId}`}>
        <ProductItemCard productItems={productItems} />
      </Link>
    </>
  );
}

export default ProductItemSearch;
