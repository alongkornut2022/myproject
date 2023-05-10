function ProductOrderItem({ cartCheckout }) {
  const { image, productName, productUnitPrice, amount, productTotalPrice } =
    cartCheckout;

  return (
    <>
      <div className="product_ordertotal_item_productitem">
        <div className="item1">
          <img src={image} />
        </div>
        <div className="item2">{productName}</div>
        <div className="item3">{productUnitPrice}</div>
        <div className="item4">{amount}</div>
        <div className="item5">{productTotalPrice}</div>
      </div>
    </>
  );
}

export default ProductOrderItem;
