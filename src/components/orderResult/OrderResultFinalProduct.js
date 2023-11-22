function OrderResultFinalProduct({ orderItem, index }) {
  const {
    productName,
    amount,
    productUnitPrice,
    discounts,
    productItemTotalPrice,
  } = orderItem;

  const productItemTotalPriceNoDiscounts = productUnitPrice * amount;
  return (
    <div>
      <div>
        {' '}
        {index + 1}. {productName}
      </div>
      <div>
        X{amount}{' '}
        {discounts === null
          ? productItemTotalPriceNoDiscounts
          : productItemTotalPrice}
        ฿
      </div>
      <br></br>
    </div>
  );
}

export default OrderResultFinalProduct;
