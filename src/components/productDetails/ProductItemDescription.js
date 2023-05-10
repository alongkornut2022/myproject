import { Link } from 'react-router-dom';

function ProductItemDescription({ productItem, productSpecs }) {
  const { categoryName, productName, inventory, province, productWeightPiece } =
    productItem;

  console.log(productWeightPiece);

  return (
    <>
      <div className="itiem1">
        <div className="product_specifications_title">
          ข้อมูลจำเพาะของสินค้า
        </div>
        <div className="product_specifications_content">
          <div className="item1">
            <div className="item2">หมวดหมู่</div>
            <div className="item3">
              <div className="sector">
                <div>
                  <Link end to="/">
                    website Name
                  </Link>
                </div>
                <div> &gt;</div>
                <div>
                  <Link end to={`/Product/Category/${categoryName}`}>
                    {categoryName}
                  </Link>
                </div>
                <div> &gt;</div>
                <div>{productName}</div>
              </div>
            </div>
          </div>
          <div className="item1">
            <div className="item2">จำนวนสินค้า</div>
            <div className="item3">{inventory} ชิ้น</div>
          </div>
          <div
            className="item1"
            hidden={
              productWeightPiece === null || productWeightPiece === ''
                ? 'hidden'
                : ''
            }
          >
            <div className="item2">น้ำหนัก</div>
            <div className="item3">{productWeightPiece} กรัม</div>
          </div>
          <div className="item1">
            <div className="item2">ส่งจาก</div>
            <div className="item3">จังหวัด{province}</div>
          </div>
        </div>
      </div>
      <div className="itiem2">
        <div className="product_descript_title">รายละเอียดสินค้า</div>
        <div className="product_descript_content">
          {productSpecs ? productSpecs : 'ไม่มีรายละเอียดสินค้า'}
        </div>
      </div>
    </>
  );
}

export default ProductItemDescription;
