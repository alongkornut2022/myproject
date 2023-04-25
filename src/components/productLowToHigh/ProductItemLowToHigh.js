import { Link } from 'react-router-dom';
import ProductItemCard from '../ProductItemCard';

function ProductItemLowToHigh({ productPriceLTH }) {
  const {
    productId,
    productName,
    productUnitprice,
    alreadysold,
    image1,
    inventory,
    createdAt,
  } = productPriceLTH;

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

export default ProductItemLowToHigh;
