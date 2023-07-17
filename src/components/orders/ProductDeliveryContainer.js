import ProductDelivery from './ProductDelivery';

function ProductDeliveryContainer({ productDeliveryContainerData }) {
  const {
    customerId,
    sellerId,
    cartProduct,
    cartIdsBySeller,
    customerPostcodeZone,
    sellerPostcodeZone,
    deliveryPrice,
    optionDelivery,
    setDeliveryPrice,
    setOptionDelivery,
    setTrigerDelivery,
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

  const totalWeight = cartProduct.reduce(
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
    setTrigerDelivery,
  };

  return (
    <>
      <ProductDelivery productDeliveryData={productDeliveryData} />
    </>
  );
}

export default ProductDeliveryContainer;
