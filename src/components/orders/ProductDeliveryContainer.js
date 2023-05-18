import ProductDelivery from './ProductDelivery';

function ProductDeliveryContainer({ productDeliveryContainerData }) {
  const {
    customerId,
    sellerId,
    cartCheckout,
    cartIdsBySeller,
    customerPostcodeZone,
    sellerPostcodeZone,
    deliveryPrice,
    optionDelivery,
    setDeliveryPrice,
    setOptionDelivery,
  } = productDeliveryContainerData;

  const sumPostcodeZone = sellerPostcodeZone + customerPostcodeZone;

  let areaGroup;
  if (sumPostcodeZone === 'AA') {
    areaGroup = 'areaG1';
  } else if (sumPostcodeZone === 'AB' || sumPostcodeZone === 'BA') {
    areaGroup = 'areaG2';
  } else {
    areaGroup = 'areaG3';
  }

  const totalWeight = cartCheckout.reduce(
    (acc, item) => acc + +item.productWeightTotal,
    0
  );

  const productDeliveryData = {
    customerId,
    sellerId,
    cartIdsBySeller,
    areaGroup,
    totalWeight,
    deliveryPrice,
    optionDelivery,
    setDeliveryPrice,
    setOptionDelivery,
  };

  return (
    <>
      <ProductDelivery productDeliveryData={productDeliveryData} />
    </>
  );
}

export default ProductDeliveryContainer;
