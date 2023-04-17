import defaultUserPicture from '../assets/images/userpicture.png';

function UserItemReview({ src, size, username }) {
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
      <div className="useritem_username">custometName{username}</div>
    </div>
  );
}

export default UserItemReview;
