import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function ProductItemTitle({ productItem }) {
  const { productName, productUnitprice, alreadysold, inventory } = productItem;
  const [amount, setAmount] = useState(1);

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

  return (
    <>
      <div className="productitem_productname">
        <h4> ชื่อสินค้า : {productName}</h4>
      </div>
      <div className="productitem_rating">คะแนนสินค้า : </div>
      <div className="productitem_price_alreadySold">
        <div className="item1">ราคา {productUnitprice}</div>
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
          <NavLink end to="/OrderTotal">
            <button>ซื้อเลย</button>
          </NavLink>
        </div>
        <div className="addtocart_item2">
          <NavLink end to="/AddToCart">
            <button>เพิ่มไปยังรถเข็น</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default ProductItemTitle;
