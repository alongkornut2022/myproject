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
  setTrigerDelivery,
}) {
  const { sellerId, shopName, shopPicture, sellerPostcode } = cartSellerIds;

  const [cartProduct, setCartProduct] = useState([]);
  const [customerPostcodeZone, setCustomerPostcodeZone] = useState();
  const [sellerPostcodeZone, setSellerPostcodeZone] = useState();
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [optionDelivery, setOptionDelivery] = useState('เลือกประเภทการส่ง');

  const amount = cartProduct.length;
  const productTotalPrice = cartProduct.reduce(
    (acc, item) => acc + item.productTotalPrice,
    0
  );

  const cartIdsBySeller = [];
  for (let item of cartProduct) {
    let i = item.cartId;
    cartIdsBySeller.push(i);
  }

  const totalprice = productTotalPrice + deliveryPrice;

  const fetchMyCartProduct = async () => {
    try {
      const resMyCartProduct = await axios.get(
        `/cart/product/${sellerId}/${cartIds}/${customerId}`
      );
      setCartProduct(resMyCartProduct.data.cartProduct);
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
    fetchMyCartProduct();
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
    cartProduct,
    cartIdsBySeller,
    customerPostcodeZone,
    sellerPostcodeZone,
    deliveryPrice,
    optionDelivery,
    setDeliveryPrice,
    setOptionDelivery,
    setTrigerDelivery,
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
          {cartProduct.map((el) => (
            <ProductOrderItem key={el.id} cartProduct={el} />
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
