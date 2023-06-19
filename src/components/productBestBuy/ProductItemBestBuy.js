import { Link } from 'react-router-dom';
import ProductItemCard from '../ProductItemCard';

function ProductItemBestBuy({ productBestBuy }) {
  const {
    productId,
    productName,
    productUnitprice,
    alreadysold,
    image1,
    inventory,
    createdAt,
    discounts,
  } = productBestBuy;

  const productItems = {
    productName,
    productUnitprice,
    alreadysold,
    image1,
    inventory,
    createdAt,
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

export default ProductItemBestBuy;
