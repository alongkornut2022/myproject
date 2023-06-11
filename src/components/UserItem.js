import defaultUserPicture from '../assets/images/userpicture.png';

function UserItem({ src, size, username }) {
  return (
    <>
      <div className="useritem_main">
        <div className="useritem_image">
          <img
            src={src || defaultUserPicture}
            width={size}
            height={size}
            alt="customer"
          />
        </div>
        <div className="useritem_username">
          <div>{username}</div>
        </div>
      </div>
    </>
  );
}

export default UserItem;
