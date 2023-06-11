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
  } = carts;

  const [amountCart, setAmountCart] = useState(amount);
  const [productTotalPriceCart, setProductTotalPriceCart] =
    useState(productTotalPrice);

  const findCartId = selectCarts.includes(cartId);

  const amountCartIncrease = async () => {
    if (+amountCart < +inventory) {
      setAmountCart(+amountCart + 1);
      if (findCartId === true) {
        setAllProductTotalPrice(+allProductTotalPrice + +productUnitPrice);
      }
    }
  };

  const amountCartDecrease = () => {
    if (+amountCart > 1) {
      setAmountCart(+amountCart - 1);
      if (findCartId === true) {
        setAllProductTotalPrice(+allProductTotalPrice - productUnitPrice);
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
    setProductTotalPriceCart(productUnitPrice * amountCart);
  }, [amountCartIncrease]);

  useEffect(() => {
    setProductTotalPriceCart(productUnitPrice * amountCart);
  }, [amountCartDecrease]);

  useEffect(() => {
    handleOnClickUpdateCart();
  }, [amountCart, productTotalPriceCart]);

  return (
    <>
      <div className="product_cart_listitem">
        <div className="item1">
          <input
            type="checkbox"
            checked={findCartId === true ? 'checked' : ''}
            onClick={(event) =>
              handleOnClickCheckBoxProduct(event, productTotalPriceCart, cartId)
            }
          ></input>
        </div>

        <div className="item2">
          <Link end to={`/ProductDetail/${productId}`}>
            <img src={image} />
          </Link>
          <div className="item2_shopname">
            <div>
              <i class="fa-solid fa-shop fa-lg"></i> {shopName}
            </div>
          </div>
        </div>

        <div className="item3">
          <div className="item3_1">
            <Link end to={`/ProductDetail/${productId}`}>
              {productName}
            </Link>
          </div>

          <div className="item3_2">{productUnitPrice}</div>
          <div className="item3_3">
            <button onClick={amountCartDecrease}>-</button>
            <input
              type="text"
              placeholder={amountCart}
              value={
                amountCart <= inventory ? amountCart : setAmountCart(inventory)
              }
              onChange={(e) =>
                setAmountCart(
                  e.target.value.replace(/[^\d]/, '').replace(/^0/, '')
                )
              }
            />
            <button onClick={amountCartIncrease}>+</button>
          </div>

          <div className="item3_4">{productTotalPriceCart}</div>
        </div>
        <div className="item4">
          <div className="address_delivery_change">
            {/* <button>แก้ไข</button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCartListItem;
