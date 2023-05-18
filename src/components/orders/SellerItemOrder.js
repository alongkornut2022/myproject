import { useEffect, useState } from 'react';
import axios from '../../config/axios';
import defaultUserPicture from '../../assets/images/userpicture.png';
import ProductOrderItem from './ProductOrderItem';
import ProductDeliveryContainer from './ProductDeliveryContainer';

function SellerItemOrder({
  cartSellerIds,
  customerId,
  cartIds,
  customerPostcode,
  setDeliverys,
}) {
  const { sellerId, shopName, shopPicture, sellerPostcode } = cartSellerIds;

  const [cartCheckout, setCartCheckout] = useState([]);
  const [customerPostcodeZone, setCustomerPostcodeZone] = useState();
  const [sellerPostcodeZone, setSellerPostcodeZone] = useState();

  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [optionDelivery, setOptionDelivery] = useState();

  useEffect(() => {
    const mixOption = sellerId + ':' + optionDelivery + ':' + deliveryPrice;
    setDeliverys(mixOption);
  }, [optionDelivery, deliveryPrice]);

  const amount = cartCheckout.length;
  const productTotalPrice = cartCheckout.reduce(
    (acc, item) => acc + item.productTotalPrice,
    0
  );

  const cartIdsBySeller = [];
  for (let item of cartCheckout) {
    let i = item.cartId;
    cartIdsBySeller.push(i);
  }

  const totalprice = productTotalPrice + deliveryPrice;

  const fetchMyCartCheckout = async () => {
    try {
      const resMyCart = await axios.get(
        `/cart/checkout/${sellerId}/${cartIds}/${customerId}`
      );
      setCartCheckout(resMyCart.data.cartCheckout);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPostcodeZoneCustomer = async () => {
    try {
      const resPostcodeZone = await axios.get(
        `/delivery/postcode/${customerPostcode}/${customerId}`
      );
      setCustomerPostcodeZone(resPostcodeZone.data.postcodeZone);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPostcodeZoneSeller = async () => {
    try {
      const resPostcodeZone = await axios.get(
        `/delivery/postcode/${sellerPostcode}/${customerId}`
      );
      setSellerPostcodeZone(resPostcodeZone.data.postcodeZone);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMyCartCheckout();
  }, []);

  useEffect(() => {
    fetchPostcodeZoneSeller();
  }, []);

  useEffect(() => {
    fetchPostcodeZoneCustomer();
  }, [customerPostcode]);

  const productDeliveryContainerData = {
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
  };

  return (
    <>
      <div className="product_ordertotal_item">
        <div className="product_ordertotal_item_seller">
          <div className="item1">
            <img src={shopPicture || defaultUserPicture} height="30"></img>
          </div>
          <div className="item2">{shopName}</div>
        </div>
        <div className="product_ordertotal_item_product">
          {cartCheckout.map((el) => (
            <ProductOrderItem key={el.id} cartCheckout={el} />
          ))}
        </div>
        <div className="ordertotal_main_content_delivery">
          <ProductDeliveryContainer
            productDeliveryContainerData={productDeliveryContainerData}
          />
        </div>
        <div className="ordertotal_main_content_totalprice">
          <div className="item1">ยอดสั่งซื้อ {amount} ชื้น (รวมขนส่ง)</div>
          <div className="item2">฿ {totalprice}</div>
        </div>
      </div>
    </>
  );
}

export default SellerItemOrder;
