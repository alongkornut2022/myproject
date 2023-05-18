import { useEffect, useState } from 'react';
import axios from '../../config/axios';
import Deliverys from './Deliverys';

function ProductDelivery({ productDeliveryData }) {
  const {
    customerId,
    sellerId,
    cartIdsBySeller,
    areaGroup,
    totalWeight,
    deliveryPrice,
    optionDelivery,
    setDeliveryPrice,
    setOptionDelivery,
  } = productDeliveryData;

  const handleOnChangeDeliveryPrice = async () => {
    try {
      if (optionDelivery === 'เลือกประเภทการส่ง') {
        setDeliveryPrice(0);
      } else {
        const resDeliveryPrice = await axios.get(
          `/delivery/shipping/${customerId}?shippingOption=${optionDelivery}&&area=${areaGroup}&&weight=${totalWeight}`
        );
        setDeliveryPrice(resDeliveryPrice.data.deliveryPrice);
        createDelivery();
        updateDelivery();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const cartIdsBySellers = cartIdsBySeller.join(',');

  const createDelivery = async () => {
    try {
      const resDelivery = await axios.post(
        `/delivery/create/${sellerId}/${customerId}`,
        { optionDelivery, deliveryPrice, cartIdsBySellers }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const updateDelivery = async () => {
    try {
      const resDelivery = await axios.patch(
        `/delivery/update/${cartIdsBySeller}/${customerId}`,
        {
          optionDelivery,
          deliveryPrice,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleOnChangeDeliveryPrice();
  }, [optionDelivery, deliveryPrice]);

  const dataDeliverys = {
    customerId,
    sellerId,
    cartIdsBySeller,
    deliveryPrice,
    optionDelivery,
  };

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
      <Deliverys dataDeliverys={dataDeliverys} />

      <div className="product_delivery_label">ค่าขนส่ง</div>
      <div className="product_delivery_price">฿ {deliveryPrice}</div>
    </div>
  );
}

export default ProductDelivery;
