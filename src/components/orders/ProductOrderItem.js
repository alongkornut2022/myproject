function ProductOrderItem({ cartCheckout }) {
  const {
    image,
    productName,
    productUnitPrice,
    amount,
    productTotalPrice,
    discounts,
  } = cartCheckout;

  const newProductUnitPrice =
    productUnitPrice - Math.floor((productUnitPrice * discounts) / 100);

  return (
    <>
      <div className="product_ordertotal_item_productitem">
        <div className="item1">
          <img src={image} />
        </div>
        <div className="item2">{productName}</div>
        <div className="item3">
          <div className="item3_1" hidden={discounts === null ? 'hidden' : ''}>
            ฿{productUnitPrice}
          </div>
          <div className="item3_2">฿{newProductUnitPrice}</div>
        </div>
        <div className="item4">{amount}</div>
        <div className="item5">฿{productTotalPrice}</div>
      </div>
    </>
  );
}

export default ProductOrderItem;
