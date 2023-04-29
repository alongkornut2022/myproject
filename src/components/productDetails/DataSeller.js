import UserItemSeller from '../UserItemSeller';

function DataSeller({ productItem }) {
  const { shopName } = productItem;
  return (
    <>
      <div className="productitem_seller_left">
        <div className="item1">
          <UserItemSeller size="80" shopName={shopName} />
        </div>

        <div className="item2">
          <div className="item2_1">
            <div className="shopTitle">ชื่อร้านค้า : </div>
            <div className="shopName"> {shopName}</div>
          </div>
          <div className="item2_2">ดูร้านค้า</div>
        </div>
      </div>
      <div className="productitem_seller_right">
        <div className="productitem_seller_right_top">
          <div className="item1">คะแนน</div>
          <div className="item2">........คะแนน</div>
          <div className="item1">เข้าร่วมเมื่อ</div>
          <div className="item2">xx xxxx xxxx</div>
        </div>
        <div className="productitem_seller_right_bottom">
          <div className="item1">รายการสินค้า</div>
          <div className="item2">.........รายการ</div>
        </div>
      </div>
    </>
  );
}

export default DataSeller;
