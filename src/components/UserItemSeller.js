import defaultUserPicture from '../assets/images/userpicture.png';

function UserItemSeller({ src, size }) {
  return (
    <div className="useritem">
      <div className="useritem_image">
        <img
          src={src || defaultUserPicture}
          width={size}
          height={size}
          alt="customer"
        />
      </div>
      {/* <div className="useritem_username">ร้านค้า : {shopName}</div> */}
    </div>
  );
}

export default UserItemSeller;
