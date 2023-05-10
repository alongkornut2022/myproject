import { useEffect, useState } from 'react';
import axios from '../../config/axios';
import { Link } from 'react-router-dom';

function ProductItemTitle({ productItem, productId, customerId }) {
  const {
    productName,
    productUnitprice,
    alreadysold,
    inventory,
    sellerId,
    productWeightPiece,
  } = productItem;

  const [amount, setAmount] = useState(1);
  const [productTotalPrice, setProductTotalPrice] = useState();
  const [productWeightTotal, setProductWeightTotal] = useState();

  const handleOnClickAddToCart = async () => {
    try {
      const resCart = await axios.post(`cart/${productId}/${customerId}`, {
        amount,
        productTotalPrice,
        productUnitprice,
        productWeightTotal,
        sellerId,
      });
    } catch (err) {}
  };

  const amountIncrease = () => {
    if (+amount < +inventory) {
      setAmount(+amount + 1);
    }
  };

  const amountDecrease = () => {
    if (+amount > 1) {
      setAmount(+amount - 1);
    }
  };

  useEffect(() => {
    setProductTotalPrice(productUnitprice * amount);
    setProductWeightTotal(productWeightPiece * amount);
  }, [amount]);

  return (
    <>
      <div className="productitem_productname">{productName}</div>
      <div className="productitem_rating">คะแนนสินค้า : </div>
      <div className="productitem_price_alreadySold">
        <div className="item1">฿ {productUnitprice}</div>
        <div className="item2">ขายแล้ว {alreadysold} ชิ้น</div>
      </div>
      <div className="productitem_numberofpieces">
        <div className="item1">จำนวน</div>
        <div className="item2">
          <button onClick={amountDecrease}>-</button>
          <input
            type="text"
            placeholder={amount}
            value={amount <= inventory ? amount : setAmount(inventory)}
            onChange={(e) =>
              setAmount(e.target.value.replace(/[^\d]/, '').replace(/^0/, ''))
            }
          />
          <button onClick={amountIncrease}>+</button>
        </div>
        <div className="item3">มีสินค้าทั้งหมด {inventory} ชิ้น</div>
      </div>
      <div className="productitem_addtocart">
        <div className="addtocart_item1">
          <Link end to="/OrderTotal">
            <button>ซื้อเลย</button>
          </Link>
        </div>
        <div className="addtocart_item2">
          <button onClick={handleOnClickAddToCart}>เพิ่มไปยังรถเข็น</button>
        </div>
      </div>
    </>
  );
}

export default ProductItemTitle;
