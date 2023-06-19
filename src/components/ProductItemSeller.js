import { Link } from 'react-router-dom';
import ProductItemCard from './ProductItemCard';

function ProductItemSeller({ productSeller }) {
  const {
    productId,
    image1,
    productName,
    productUnitprice,
    alreadysold,
    discounts,
  } = productSeller;

  const productItems = {
    image1,
    productName,
    productUnitprice,
    alreadysold,
    discounts,
  };

  const refreshPage = () => {
    setTimeout(() => {
      window.location.reload(false);
    }, 0);
  };

  return (
    <>
      <Link end to={`/ProductDetail/${productId}`} onClick={refreshPage}>
        <ProductItemCard productItems={productItems} />
      </Link>
    </>
  );
}

export default ProductItemSeller;
