import { useEffect, useState } from 'react';
import axios from '../../config/axios';
import { Link } from 'react-router-dom';

function ProductCartListItem({
  carts,
  handleOnClickCheckBoxProduct,
  customerId,
  setAllProductTotalPrice,
  allProductTotalPrice,
  selectCarts,
  setTriger,
}) {
  const {
    productId,
    cartId,
    productName,
    amount,
    productUnitPrice,
    productTotalPrice,
    image,
    shopName,
    inventory,
    discounts,
  } = carts;

  const newProductUnitPrice =
    productUnitPrice - Math.floor((productUnitPrice * discounts) / 100);

  const [amountCart, setAmountCart] = useState(amount);
  const [productTotalPriceCart, setProductTotalPriceCart] =
    useState(productTotalPrice);

  const findCartId = selectCarts.includes(cartId);

  const amountCartIncrease = async () => {
    if (+amountCart < +inventory) {
      setAmountCart(+amountCart + 1);
      if (findCartId === true) {
        setAllProductTotalPrice(+allProductTotalPrice + +newProductUnitPrice);
      }
    }
  };

  const amountCartDecrease = () => {
    if (+amountCart > 1) {
      setAmountCart(+amountCart - 1);
      if (findCartId === true) {
        setAllProductTotalPrice(+allProductTotalPrice - newProductUnitPrice);
      }
    }
  };

  const handleOnClickUpdateCart = async () => {
    try {
      const resCart = await axios.patch(`/cart/${cartId}/${customerId}`, {
        amountCart,
        productTotalPriceCart,
      });
      setTriger(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setProductTotalPriceCart(newProductUnitPrice * amountCart);
  }, [amountCart]);

  useEffect(() => {
    handleOnClickUpdateCart();
  }, [productTotalPriceCart]);

  return (
    <>
      <div className="product_cart_listitem">
        <div className="item1">
          <input
            type="checkbox"
            checked={findCartId === true ? 'checked' : ''}
            disabled={inventory === 0 ? 'true' : ''}
            onClick={(event) => {
              if (amountCart === '') {
                alert('กรุณากรอก "จำนวน" สินค้า');
              } else {
                handleOnClickCheckBoxProduct(
                  event,
                  productTotalPriceCart,
                  cartId
                );
              }
            }}
          ></input>
        </div>

        <div className="item2">
          <Link end to={`/ProductDetail/${productId}`}>
            <img src={image} />
          </Link>
        </div>

        <div className="item3">
          <div className="item3_1">
            <div className="item2_shopname">
              <div>
                <i class="fa-solid fa-shop fa-lg"></i> {shopName}
              </div>
            </div>
            <Link end to={`/ProductDetail/${productId}`}>
              {productName}
            </Link>
            <div
              className="product_cart_listitem_outofstock"
              hidden={inventory === 0 ? '' : 'hidden'}
            >
              * สินค้าหมด
            </div>
          </div>

          <div className="item3_2">
            <div
              className="item3_2_1"
              hidden={discounts === null ? 'hidden' : ''}
            >
              ฿{productUnitPrice}
            </div>
            <div className="item3_2_2">฿{newProductUnitPrice}</div>
          </div>
          <div className="item3_3">
            <div className="inner">
              <button onClick={amountCartDecrease}>-</button>
              <input
                type="text"
                placeholder={amountCart}
                value={
                  amountCart <= inventory
                    ? amountCart
                    : setAmountCart(inventory)
                }
                onChange={(e) =>
                  setAmountCart(
                    e.target.value.replace(/[^\d]/, '').replace(/^0/, '')
                  )
                }
              />
              <button onClick={amountCartIncrease}>+</button>
            </div>
            <div className="inner2">คงเหลือ {inventory} ชิ้น </div>
          </div>

          <div className="item3_4">{productTotalPriceCart}</div>
        </div>
        {/* <div className="item4"></div> */}
      </div>
    </>
  );
}

export default ProductCartListItem;
