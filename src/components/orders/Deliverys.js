import { useEffect, useState } from 'react';
import axios from '../../config/axios';

function Deliverys({ dataDeliverys }) {
  const {
    customerId,
    sellerId,
    cartIdsBySeller,
    deliveryPrice,
    optionDelivery,
  } = dataDeliverys;

  //   const cartIdsBySellers = cartIdsBySeller.join(',');

  //   const delivery = async () => {
  //     try {
  //       const resDelivery = await axios.post(
  //         `/delivery/create/${sellerId}/${customerId}`,
  //         { optionDelivery, deliveryPrice, cartIdsBySellers }
  //       );
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   const updateDelivery = async () => {
  //     try {
  //       const resDelivery = await axios.patch(
  //         `/delivery/update/${cartIdsBySeller}/${customerId}`,
  //         {
  //           optionDelivery,
  //           deliveryPrice,
  //         }
  //       );
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  console.log(customerId);
  console.log(cartIdsBySeller);
  console.log(sellerId);
  console.log(optionDelivery);
  console.log(deliveryPrice);

  //   useEffect(() => {
  //     setTimeout(delivery, 1000);
  //   }, [optionDelivery]);

  //   useEffect(() => {
  //     setTimeout(updateDelivery, 1000);
  //   }, [optionDelivery]);

  return <></>;
}

export default Deliverys;
