import UserItemSeller from '../UserItemSeller';
import { timeSince } from '../../services/dateFormat';

function DataSeller({ productItem, productSeller }) {
  const { shopName, shopPicture, shopCreatedAt } = productItem;

  const date = new Date(shopCreatedAt);
  const day = date.getUTCDate();
  const monthNum = date.getUTCMonth();
  // const monthNameEng = [
  //   'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  //   'August',
  //   'September',
  //   'October',
  //   'November',
  //   'December',
  // ];
  // const monthNameThai = [
  //   'มกราคม',
  //   'กุมภาพันธ์',
  //   'มีนาคม',
  //   'เมษายน',
  //   'พฤษภาคม',
  //   'มิถุนายน',
  //   'กรกฎาคม',
  //   'สิงหาคม',
  //   'กันยายน',
  //   'ตุลาคม',
  //   'พฤษจิกายน',
  //   'ธันวาคม',
  // ];
  const month = monthNum + 1;
  const year = date.getUTCFullYear();

  return (
    <>
      <div className="productitem_seller_left">
        <div className="item1">
          <UserItemSeller size="80" shopName={shopName} src={shopPicture} />
        </div>

        <div className="item2">
          <div className="item2_1">
            <div className="shopTitle">ร้านค้า </div>
            <div className="shopName">{shopName}</div>
          </div>
          <div className="item2_2">ดูร้านค้า</div>
        </div>
      </div>

      <div className="productitem_seller_right">
        <div className="productitem_seller_right_top">
          <div className="item1">คะแนน </div>
          <div className="item2"> ยังไม่มีคะแนน</div>
          <div className="item1">เข้าร่วมเมื่อ </div>
          <div className="item2">
            {/* {day}/{month}/{year}  */}
            {timeSince(date)}
          </div>
        </div>
        <div className="productitem_seller_right_bottom">
          <div className="item1">รายการสินค้า </div>
          <div className="item2">{productSeller.length} รายการ</div>
        </div>
      </div>
    </>
  );
}

export default DataSeller;
