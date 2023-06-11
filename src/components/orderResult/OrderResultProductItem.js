function OrderResultProductItem({ orderItem }) {
  const { productName, image, amount, productItemTotalPrice } = orderItem;
  return (
    <>
      <div className="orderresult_item_product_main">
        <div className="orderresult_item_product_img">
          <img src={image} />
        </div>
        <div className="orderresult_item_product_title">
          <div>{productName} </div>
          <div>X {amount}</div>
        </div>
        <div className="orderresult_item_product_price">
          ฿ {productItemTotalPrice}
        </div>
      </div>
    </>
  );
}

export default OrderResultProductItem;
