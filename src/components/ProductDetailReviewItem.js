import React from 'react';
import UserItem from './UserItem';

function ProductDetailReviewItem() {
  return (
    <div className="review_main">
      <div className="review_left">
        <UserItem />
      </div>
      <div className="review_right">
        <div>คะแนนสินค้าที่ลูกค้าให้</div>
        <div>เนื้อหารีวิว</div>
        <div className="review_image_main">
          <div className="review_image_item1">
            <img src="https://picsum.photos/80" />
          </div>
          <div className="review_image_item2">
            <img src="https://picsum.photos/80" />
          </div>
          <div className="review_image_item3">
            <img src="https://picsum.photos/80" />
          </div>
          <div className="review_image_item4">
            <img src="https://picsum.photos/80" />
          </div>
          <div className="review_image_item5">
            <img src="https://picsum.photos/80" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailReviewItem;
