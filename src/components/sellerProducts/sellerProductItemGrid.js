import { Link } from 'react-router-dom';
import ProductItemCard from '../ProductItemCard';

function sellerProductItemGrid({ productSeller }) {
  const {
    productId,
    productName,
    productUnitprice,
    alreadysold,
    image1,
    stockStart,
    inventory,
    createdAt,
    discounts,
  } = productSeller;

  const productItems = {
    productName,
    productUnitprice,
    alreadysold,
    image1,
    // inventory,
    createdAt,
    discounts,
  };

  return (
    <>
      <div className="orderresult_container_item_product_grid_item">
        <Link end to={`/ProductDetail/${productId}`}>
          <ProductItemCard
            productItems={productItems}
            stockStart={stockStart}
            inventory={inventory}
          />
        </Link>
      </div>
    </>
  );
}

export default sellerProductItemGrid;
