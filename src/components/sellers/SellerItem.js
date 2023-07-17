import { Link } from 'react-router-dom';
import UserItem from '../UserItem';
import defaultUserPicture from '../../assets/images/userpicture.png';
import Spinner from '../Spinner';

function SellerItem({
  seller,
  HandleOnClickEditUserPicture,
  loading,
  setShopPicture,
  usePic,
}) {
  return (
    <>
      <div className="customer_main_content_left_top_left">
        <Link to={`/seller/profile/${seller.id}`}>
          <UserItem size="40" src={seller.shopPicture || defaultUserPicture} />
        </Link>
      </div>
      <div className="customer_main_content_left_top_right">
        <Link to={`/seller/profile/${seller.id}`}>{seller.shopName}</Link>
        <Spinner loading={loading} />
        <div>
          <button type="button" onClick={HandleOnClickEditUserPicture}>
            แก้ไขรูป profile
          </button>
          <input
            type="file"
            ref={usePic}
            onChange={(event) => {
              if (event.target.files[0].size > 1048576) {
                alert('รูปภาพขนาดต้องไม่เกิน 1 MB');
              } else {
                if (event.target.files[0]) {
                  setShopPicture(event.target.files[0]);
                }
              }
            }}
          />
        </div>
        <div className="customer_main_content_left_top_right_validate">
          (ไม่เกิน 1 MB)
        </div>
      </div>
    </>
  );
}

export default SellerItem;
