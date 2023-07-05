import { useEffect, useState } from 'react';
import axios from '../../config/axios';
import ProductCartListItem from './ProductCartListItem';
import { Link, useNavigate } from 'react-router-dom';

function CartContainer({
  customer,
  // carts,
  // allProductTotalPrice,
  // setAllProductTotalPrice,
}) {
  const [carts, setCarts] = useState([]);
  const [amountProducts, setAmountProcucts] = useState(0);
  const [allProductTotalPrice, setAllProductTotalPrice] = useState(0);
  const [selectCarts, setSelectCarts] = useState([]);
  const [triger, setTriger] = useState(false);

  const navigate = useNavigate();
  const customerId = customer.id;

  const fetchMyCart = async () => {
    try {
      const resMyCart = await axios.get(`/cart/${customerId}`);
      setCarts(resMyCart.data.carts);
      setTriger(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMyCart();
  }, [allProductTotalPrice, triger]);

  const sumAllProductTotalPrice = carts.reduce(
    (acc, item) => acc + item.productTotalPrice,
    0
  );

  // console.log(sumAllProductTotalPrice);
  // console.log('selectCarts', selectCarts);

  const sumCartId = carts.map((item) => item.cartId);
  const handleOnClickAllCheckBoxProduct = (event) => {
    if (event.currentTarget.checked) {
      if (selectCarts.length > 0) {
        for (let i = 1; (i = selectCarts.length); i++) {
          selectCarts.pop();
        }
      }

      setSelectCarts(selectCarts.concat(sumCartId));
      setAmountProcucts(carts.length);
      setAllProductTotalPrice(sumAllProductTotalPrice);
    } else {
      setAmountProcucts(0);
      setAllProductTotalPrice(0);
      setSelectCarts([]);
    }
  };

  const handleOnClickCheckBoxProduct = (
    event,
    productTotalPriceCart,
    cartId
  ) => {
    if (event.currentTarget.checked) {
      setAmountProcucts(amountProducts + 1);
      setAllProductTotalPrice(allProductTotalPrice + productTotalPriceCart);
      selectCarts.push(cartId);
    } else {
      setAmountProcucts(amountProducts - 1);
      setAllProductTotalPrice(allProductTotalPrice - productTotalPriceCart);
      const index = selectCarts.findIndex((item) => item === cartId);
      selectCarts.splice(index, 1);
    }
  };

  const cartIds = selectCarts.join(',');

  const handleOnClickDeleteCart = async () => {
    if (selectCarts.length === 0) {
      alert('คุณยังไม่ได้เลือกสินค้า');
    } else {
      if (window.confirm('คุณแน่ใจว่าต้องการลบสินค้า หรือไม่') == true) {
        try {
          await axios.delete(`/cart/${selectCarts}/${customerId}`);
        } catch (err) {
        } finally {
          document.location.reload();
        }
      } else {
      }
    }
  };

  const handleOnClickSendOrder = async () => {
    try {
      if (cartIds.length < 1) {
        alert('คุณยังไม่ได้เลือกสินค้า');
      } else {
        navigate(`/purchase/${customerId}/checkout/${cartIds}`);
      }
    } catch (err) {}
  };

  return (
    <>
      <div className="addressbook_main_content_right_top">
        <h5>ตะกร้าสินค้า</h5>
      </div>

      <div className="product_cart_main_content">
        <div className="product_cart_listbar_top">
          <div className="item1">
            <input
              type="checkbox"
              checked={
                selectCarts.length === carts.length
                  ? carts.length === 0
                    ? ''
                    : 'checked'
                  : ''
              }
              onClick={(event) => handleOnClickAllCheckBoxProduct(event)}
            ></input>
          </div>
          <div className="item2">รายการสินค้า</div>
          <div className="item3">ราคาต่อชิ้น</div>
          <div className="item4">จำนวน</div>
          <div className="item5">ราคารวม</div>
          <div className="item6"></div>
        </div>
        <div>
          <h5>
            {carts.length > 0 ? '' : '- ยังไม่มีรายการสินค้าในตระกร้าสินค้า'}
          </h5>
        </div>
        {carts.map((el) => (
          <ProductCartListItem
            key={el.id}
            carts={el}
            handleOnClickCheckBoxProduct={handleOnClickCheckBoxProduct}
            customerId={customerId}
            setAllProductTotalPrice={setAllProductTotalPrice}
            allProductTotalPrice={allProductTotalPrice}
            selectCarts={selectCarts}
            setTriger={setTriger}
          />
        ))}

        <div className="product_cart_listbar_buttom">
          <div className="item1">
            <input
              type="checkbox"
              checked={
                selectCarts.length === carts.length
                  ? carts.length === 0
                    ? ''
                    : 'checked'
                  : ''
              }
              onClick={(event) => handleOnClickAllCheckBoxProduct(event)}
            ></input>
          </div>
          <div className="item2">ทั้งหมด</div>
          <div className="item2_1">
            <button onClick={handleOnClickDeleteCart}>ลบ</button>
          </div>
          <div className="item3_1">รวมสินค้า</div>
          <div className="item3_2">{amountProducts}</div>
          <div className="item3_3">รายการ</div>
          <div className="item4">เป็นเงิน</div>
          <div className="item5">฿ {allProductTotalPrice}</div>
          <div className="item6">
            <button onClick={handleOnClickSendOrder}>สั่งสินค้า</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartContainer;
