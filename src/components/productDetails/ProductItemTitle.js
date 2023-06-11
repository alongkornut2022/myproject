import { useEffect, useState } from 'react';
import axios from '../../config/axios';
import { useNavigate } from 'react-router-dom';

function ProductItemTitle({ productItem, productId, customerId, customer }) {
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
  const [productRating, setProductRating] = useState([]);

  const totalRating = productRating.reduce((acc, item) => acc + item.rating, 0);
  const sumRating = totalRating / productRating.length;

  const navigate = useNavigate();

  const handleOnClickAddToCart = async () => {
    if (customer) {
      try {
        const resCart = await axios.post(`cart/${productId}/${customerId}`, {
          amount,
          productTotalPrice,
          productUnitprice,
          productWeightTotal,
          sellerId,
        });
        alert('เพิ่มไปยังรถเข็นเรียบร้อยแล้ว');
      } catch (err) {
        console.log(err);
      }
    } else if (
      window.confirm(
        'คุณยังไม่ได้เข้าสู่ระบบ คุณต้องการ "เข้าสู่ระบบ"  หรือไม่ ?'
      ) === true
    ) {
      navigate('/login');
    } else {
    }
  };

  const handleOnClickSendToCart = async () => {
    if (customer) {
      try {
        const resCart = await axios.post(`cart/${productId}/${customerId}`, {
          amount,
          productTotalPrice,
          productUnitprice,
          productWeightTotal,
          sellerId,
        });
        navigate(`/customer/cart/${customerId}`);
      } catch (err) {
        console.log(err);
      }
    } else if (
      window.confirm(
        'คุณยังไม่ได้เข้าสู่ระบบ คุณต้องการ "เข้าสู่ระบบ"  หรือไม่ ?'
      ) === true
    ) {
      navigate('/login');
    } else {
    }
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

  const fetchProductRating = async (rating) => {
    try {
      const resProductRating = await axios.get(
        `/postreview/product/${productId}?rating=${rating}`
      );
      setProductRating(resProductRating.data.productRating);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProductRating('All');
  }, []);

  return (
    <>
      <div className="productitem_productname">{productName}</div>
      <div className="productitem_rating">
        คะแนนสินค้า : {sumRating ? sumRating : 'ยังไม่มีคะแนน'}
      </div>
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
          <button onClick={handleOnClickSendToCart}>ซื้อเลย</button>
        </div>
        <div className="addtocart_item2">
          <button onClick={handleOnClickAddToCart}>เพิ่มไปยังรถเข็น</button>
        </div>
      </div>
    </>
  );
}

export default ProductItemTitle;
