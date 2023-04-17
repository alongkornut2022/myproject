import { NavLink } from 'react-router-dom';

function ProductItemCategory({ productByCategory }) {
  const {
    productId,
    productName,
    productUnitprice,
    alreadysold,
    image1,
    inventory,
    createdAt,
  } = productByCategory;

  return (
    <>
      <NavLink end to={`/ProductDetail/${productId}`}>
        <div className="productitem_card">
          <div className="productitem_card_image">
            <img src={image1} sizes="200" />
          </div>
          <div className="productitem_card_detail">
            <div className="productitem_card_detail_top">
              <div className="productname">{productName}</div>
            </div>
            <div className="productitem_card_detail_buttom">
              <div className="productprice">ราคา {productUnitprice} บาท</div>
              <div className="productalreadysold">
                ขายแล้ว {alreadysold} ชิ้น
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default ProductItemCategory;
