import BuyAgainItem from './BuyAgainItem';

function BuyAgainContainer({ shopName, orderItem, closeModal3 }) {
  return (
    <div className="buyagain_container">
      <div className="buyagain_shopname">ร้าน {shopName}</div>
      <div className="buyagain_item">
        {orderItem.map((el) => (
          <BuyAgainItem key={el.id} orderItem={el} closeModal3={closeModal3} />
        ))}
      </div>
    </div>
  );
}

export default BuyAgainContainer;
