import pic from '../../images/searchbar.jpg';

function OrderResultProductItem({ orderItem }) {
  const { productName, image, productItemTotalPrice } = orderItem;
  return (
    <>
      <div className="orderresult_item_product_main">
        <div className="orderresult_item_product_img">
          <img src={image} />
        </div>
        <div className="orderresult_item_product_title">{productName}</div>
        <div className="orderresult_item_product_price">
          ฿ {productItemTotalPrice}
        </div>
      </div>
    </>
  );
}

export default OrderResultProductItem;
