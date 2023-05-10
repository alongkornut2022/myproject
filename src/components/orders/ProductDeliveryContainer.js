import ProductDelivery from './ProductDelivery';

function ProductDeliveryContainer({ productDeliveryContainerData }) {
  const {
    customerId,
    cartCheckout,
    customerPostcodeZone,
    sellerPostcodeZone,
    setDeliveryTotalPrice,
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

  console.log('postcodeZone', sumPostcodeZone);
  console.log('areaGroup', areaGroup);
  console.log('totalWeight', totalWeight);

  const productDeliveryData = {
    customerId,
    areaGroup,
    totalWeight,
    setDeliveryTotalPrice,
  };

  return (
    <>
      <ProductDelivery productDeliveryData={productDeliveryData} />
    </>
  );
}

export default ProductDeliveryContainer;
