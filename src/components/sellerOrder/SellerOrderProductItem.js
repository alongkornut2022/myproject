function SellerOrderProductItem({ orderItem }) {
  const {
    productName,
    image,
    amount,
    productUnitPrice,
    discounts,
    productItemTotalPrice,
  } = orderItem;

  const productItemTotalPriceNoDiscounts = productUnitPrice * amount;
  return (
    <>
      <div className="orderresult_item_product_main">
        <div className="orderresult_item_product_img">
          <img src={image} />
        </div>
        <div className="orderresult_item_product_title">
          <div>{productName} </div>
          <div className="order_item_product_title">X {amount} ชิ้น</div>
        </div>
        <div className="orderresult_item_product_price">
          <div
            className="orderresult_item_product_price_nodiscounts"
            hidden={discounts === null ? 'hidden' : ''}
          >
            ฿{productItemTotalPriceNoDiscounts}
          </div>
          <div className="orderresult_item_product_price_discounts">
            ฿ {productItemTotalPrice}
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerOrderProductItem;
