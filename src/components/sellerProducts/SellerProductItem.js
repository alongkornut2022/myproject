import { Link } from 'react-router-dom';

function SellerProductItem({ productSeller }) {
  const {
    productId,
    productName,
    image1,
    productUnitprice,
    stockStart,
    alreadysold,
    inventory,
  } = productSeller;

  return (
    <>
      <div className="orderresult_container_item_main">
        <div className="orderresult_item_top">
          <div className="order_item_product_container">
            <div className="sellerproduct_item_product_item1">
              <div className="sellerproduct_item_product_item1_1">
                <Link end to={`/productdetail/${productId}`}>
                  <img src={image1} />
                </Link>
              </div>
              <div className="sellerproduct_item_product_item1_2">
                <Link end to={`/productdetail/${productId}`}>
                  {productName}
                </Link>
              </div>
            </div>
            <div className="order_item_product_item2">
              <div className="item2_1">฿ {productUnitprice}</div>
            </div>
            <div className="order_item_product_item3">
              {stockStart} / {inventory}
            </div>
            <div className="order_item_product_item4">
              <div>{alreadysold}</div>
            </div>
            <div className="order_item_product_item5">
              <button>แก้ไข</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerProductItem;
