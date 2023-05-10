import { useEffect, useState } from 'react';
import axios from '../../config/axios';

function ProductDelivery({ productDeliveryData }) {
  const { customerId, areaGroup, totalWeight, setDeliveryTotalPrice } =
    productDeliveryData;

  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [optionDelivery, setOptionDelivery] = useState();

  const handleOnChangeDeliveryPrice = async () => {
    try {
      const resDeliveryPrice = await axios.get(
        `/delivery/shipping/${customerId}?shippingOption=${optionDelivery}&&area=${areaGroup}&&weight=${totalWeight}`
      );
      setDeliveryPrice(resDeliveryPrice.data.deliveryPrice);
      setDeliveryTotalPrice(resDeliveryPrice.data.deliveryPrice);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleOnChangeDeliveryPrice();
  }, [optionDelivery]);

  // console.log(optionDelivery);
  // console.log(deliveryPrice);

  return (
    <div className="product_delivery">
      <div className="delivery_method">Option Delivery :</div>
      <div className="delivery_option">
        <select onChange={(event) => setOptionDelivery(event.target.value)}>
          <option>เลือกประเภทการส่ง</option>
          <option>Standard Delivery-ส่งธรรมดา</option>
          <option>EMS</option>
        </select>
      </div>

      <div className="product_delivery_label">ค่าขนส่ง</div>
      <div className="product_delivery_price">฿ {deliveryPrice}</div>
    </div>
  );
}

export default ProductDelivery;
