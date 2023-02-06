import React from 'react';

function UserItem() {
  return (
    <div className="useritem">
      <div className="useritem_image">
        <img src="https://picsum.photos/40" />
      </div>
      <div className="useritem_username">
        <h4>ชื่อลูกค้าที่รีวิว</h4>
      </div>
    </div>
  );
}

export default UserItem;
