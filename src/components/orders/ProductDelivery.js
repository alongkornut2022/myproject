import { useEffect, useState } from 'react';
import axios from '../../config/axios';

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
    setTrigerDelivery,
  } = productDeliveryData;

  // const [deliveryCartIds, setDeliveryCartIds] = useState('');

  const cartIdsBySellers = cartIdsBySeller.join(',');

  // const fetchCartIds = async () => {
  //   try {
  //     const deliveryCartIds = await axios.get(
  //       `/delivery/cartIds/${cartIdsBySeller}/${customerId}`
  //     );
  //     setDeliveryCartIds(deliveryCartIds.data.deliveryCartIds);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchCartIds();
  // }, []);

  const handleOnChangeDeliveryPrice = async (optionDeliveryDefault) => {
    try {
      const resDeliveryPrice = await axios.get(
        `/delivery/shipping/${customerId}?shippingOption=${
          optionDeliveryDefault || optionDelivery
        }&&area=${areaGroup}&&weight=${totalWeight}`
      );
      setDeliveryPrice(resDeliveryPrice.data.deliveryPrice);
    } catch (err) {
      console.log(err);
    }
  };

  const createDelivery = async (optionDelivery, cartIdsBySellers) => {
    console.log(cartIdsBySellers);
    try {
      await axios.post(
        `/delivery/create/${sellerId}/${customerId}/${cartIdsBySellers}`,
        {
          optionDelivery,
          deliveryPrice: 0,
        }
      );
      setTrigerDelivery(true);
    } catch (err) {
      console.log(err);
    }
  };

  const updateDelivery = async () => {
    try {
      await axios.patch(`/delivery/update/${cartIdsBySeller}/${customerId}`, {
        optionDelivery,
        deliveryPrice,
      });
      setTrigerDelivery(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    createDelivery('เลือกประเภทการส่ง', cartIdsBySellers);
  }, [cartIdsBySellers]);

  // useEffect(() => {
  //   handleOnChangeDeliveryPrice('เลือกประเภทการส่ง');
  // }, []);

  useEffect(() => {
    handleOnChangeDeliveryPrice();
  }, [optionDelivery]);

  // useEffect(() => {
  //   deliveryCartIds === cartIdsBySeller ? updateDelivery() : createDelivery();
  // }, [deliveryPrice]);

  useEffect(() => {
    updateDelivery();
  }, [deliveryPrice]);

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
