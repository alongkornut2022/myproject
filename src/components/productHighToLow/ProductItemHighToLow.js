import { Link } from 'react-router-dom';
import ProductItemCard from '../ProductItemCard';

function ProductHighToLowItem({ productPriceHTL }) {
  const {
    productId,
    productName,
    productUnitprice,
    alreadysold,
    image1,
    inventory,
    createdAt,
  } = productPriceHTL;

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
      <Link end to={`/ProductDetail/${productId}`}>
        <ProductItemCard productItems={productItems} />
      </Link>
    </>
  );
}

export default ProductHighToLowItem;
