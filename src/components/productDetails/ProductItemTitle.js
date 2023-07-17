import { useContext, useEffect, useState } from 'react';
import { AuthSellerContext } from '../../contexts/AuthSellerContext';
import { ErrorContext } from '../../contexts/ErrorContext';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import axios from '../../config/axios';

function ProductItemTitle({ productItem, productId, customerId, customer }) {
  const {
    productName,
    productUnitprice,
    alreadysold,
    inventory,
    sellerId,
    productWeightPiece,
    discounts,
  } = productItem;

  const { seller } = useContext(AuthSellerContext);
  const { setError } = useContext(ErrorContext);
  const { fetchCart } = useContext(CartContext);

  const newProductUnitprice = Math.floor(
    productUnitprice - (productUnitprice * discounts) / 100
  );

  const [amount, setAmount] = useState(1);
  const [productWeightTotal, setProductWeightTotal] = useState();
  const [productRating, setProductRating] = useState([]);
  const totalRating = productRating.reduce((acc, item) => acc + item.rating, 0);
  const sumRating = totalRating / productRating.length;

  const navigate = useNavigate();

  const handleOnClickAddToCart = async () => {
    if (customer) {
      try {
        if (amount === '') {
          alert('คุณยังไม่ได้กรอก "จำนวน"');
        } else {
          const resCart = await axios.post(`cart/${productId}/${customerId}`, {
            amount,
            productWeightTotal,
            sellerId,
          });
          alert('เพิ่มไปยังรถเข็นเรียบร้อยแล้ว');
          fetchCart();
        }
      } catch (err) {
        setError(err.response.data.message);
      }
    } else if (
      window.confirm(
        'คุณยังไม่ได้เข้าสู่ระบบ "ผู้ซื้อ" คุณต้องการ "เข้าสู่ระบบ : ผู้ซื้อ"  หรือไม่ ?'
      ) === true
    ) {
      navigate('/login');
    } else {
    }
  };

  const handleOnClickSendToCart = async () => {
    if (customer) {
      try {
        if (amount === '') {
          alert('คุณยังไม่ได้กรอก "จำนวน"');
        } else {
          const resCart = await axios.post(`cart/${productId}/${customerId}`, {
            amount,
            productWeightTotal,
            sellerId,
          });
          navigate(`/customer/cart/${customerId}`);
          fetchCart();
        }
      } catch (err) {
        setError(err.response.data.message);
      }
    } else if (
      window.confirm(
        'คุณยังไม่ได้เข้าสู่ระบบ "ผู้ซื้อ" คุณต้องการ "เข้าสู่ระบบ : ผู้ซื้อ"  หรือไม่ ?'
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
        <div className="item1">
          คะแนนสินค้า : {sumRating ? sumRating : 'ยังไม่มีคะแนน'}
        </div>

        <div className="item2">ขายแล้ว {alreadysold} ชิ้น</div>
      </div>
      <div className="productitem_price_alreadySold">
        <div className="item1" hidden={discounts === null ? 'hidden' : ''}>
          ฿{productUnitprice}
        </div>
        <div className="item2">
          ฿{discounts === null ? productUnitprice : newProductUnitprice}
        </div>
        <div className="item3">
          <div className="item3_1" hidden={discounts === null ? 'hidden' : ''}>
            ส่วนลด {discounts}%
          </div>
        </div>
      </div>
      <div className="productitem_numberofpieces">
        <div className="item1">จำนวน</div>
        <div className="item2">
          <button onClick={amountDecrease} disabled={seller ? 'true' : ''}>
            -
          </button>
          <input
            type="text"
            placeholder={amount}
            value={amount <= inventory ? amount : setAmount(inventory)}
            onChange={(e) =>
              setAmount(e.target.value.replace(/[^\d]/, '').replace(/^0/, ''))
            }
            disabled={seller ? 'true' : ''}
          />
          <button onClick={amountIncrease} disabled={seller ? 'true' : ''}>
            +
          </button>
        </div>
        <div className="item3">มีสินค้าทั้งหมด {inventory} ชิ้น</div>
      </div>
      <div className="productitem_addtocart">
        <div className="addtocart_item1">
          <button
            onClick={handleOnClickSendToCart}
            disabled={seller || inventory === 0 ? 'true' : ''}
          >
            ซื้อเลย
          </button>
        </div>
        <div className="addtocart_item2">
          <button
            onClick={handleOnClickAddToCart}
            disabled={seller || inventory === 0 ? 'true' : ''}
          >
            เพิ่มไปยังรถเข็น
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductItemTitle;
