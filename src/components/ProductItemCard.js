function ProductItemCard({ productItems, stockStart, inventory }) {
  const {
    productName,
    productUnitprice,
    alreadysold,
    image1,
    // inventory,
    createdAt,
    discounts,
  } = productItems;

  const newProductUnitprice = Math.floor(
    productUnitprice - (productUnitprice * discounts) / 100
  );
  return (
    <>
      <div className="productitem_card">
        <div className="productitem_card_image">
          <div
            className="productitem_card_discounts"
            hidden={discounts === null ? 'hidden' : ''}
          >
            <div className="productitem_card_discounts_item1">ลด</div>
            <div className="productitem_card_discounts_item2">{discounts}%</div>
          </div>
          <img src={image1} />
        </div>
        <div className="productitem_card_detail">
          <div className="productitem_card_detail_top">
            <div className="productname">{productName}</div>
          </div>
          <div className="productitem_card_detail_middle">
            <div
              className="productitem_card_detail_inventory"
              hidden={stockStart ? '' : 'hidden'}
            >
              ยอดเต็ม {stockStart} / คงคลัง {inventory}
            </div>
          </div>
          <div className="productitem_card_detail_buttom">
            <div className="productitem_card_detail_buttom_left">
              <div
                className="productprice"
                hidden={discounts === null ? 'hidden' : ''}
              >
                ฿{productUnitprice}
              </div>
              <div className="newproductprice">
                ฿{discounts === null ? productUnitprice : newProductUnitprice}
              </div>
            </div>
            <div className="productalreadysold">ขายแล้ว {alreadysold} ชิ้น</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItemCard;
