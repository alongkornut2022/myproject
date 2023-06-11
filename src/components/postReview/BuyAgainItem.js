import { Link, useNavigate } from 'react-router-dom';

function BuyAgainItem({ orderItem, closeModal3 }) {
  const { productId, productName, image, amount, productUnitPrice } = orderItem;

  const navigate = useNavigate();

  const handleOnClickProductDetail = () => {
    closeModal3();
    navigate(`/ProductDetail/${productId}`);
  };
  return (
    <div className="buyagain_item_container">
      <div className="buyagain_item_image">
        <button onClick={handleOnClickProductDetail}>
          <img src={image} />
        </button>
      </div>
      <div className="buyagain_item_productname">
        <button onClick={handleOnClickProductDetail}>{productName}</button>
      </div>
      <div className="buyagain_item_pricelabel">ราคาต่อชิ้น</div>
      <div className="buyagain_item_price">฿ {productUnitPrice}</div>
    </div>
  );
}

export default BuyAgainItem;
