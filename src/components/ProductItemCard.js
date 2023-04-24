function ProductItemCard({ productItems }) {
  const {
    productName,
    productUnitprice,
    alreadysold,
    image1,
    inventory,
    createdAt,
  } = productItems;

  return (
    <>
      <div className="productitem_card">
        <div className="productitem_card_image">
          <img src={image1} sizes="200" />
        </div>
        <div className="productitem_card_detail">
          <div className="productitem_card_detail_top">
            <div className="productname">{productName}</div>
          </div>
          <div className="productitem_card_detail_middle"></div>
          <div className="productitem_card_detail_buttom">
            <div className="productprice">฿ {productUnitprice}</div>
            <div className="productalreadysold">ขายแล้ว {alreadysold} ชิ้น</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItemCard;
