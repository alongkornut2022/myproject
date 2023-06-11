import defaultUserPicture from '../assets/images/userpicture.png';

function UserItemReview({ src, size, username, displayUsername }) {
  let usernameStr = '*';
  let i;
  for (i = 1; i < username.length - 2; i++) {
    usernameStr = usernameStr + '*';
  }

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
      <div className="useritem_username">
        {displayUsername == 1
          ? username.replace(
              username,
              username[0] + usernameStr + username[username.length - 1]
            )
          : username}
      </div>
    </div>
  );
}

export default UserItemReview;
