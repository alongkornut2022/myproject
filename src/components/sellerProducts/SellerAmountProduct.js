function SellerAmountProduct({
  productSeller,
  navBar,
  searchProduct,
  trigerSearch,
}) {
  let newNavBar;
  if (navBar === 'selling') {
    newNavBar = 'ขายอยู่';
  } else if (navBar === 'sold out') {
    newNavBar = 'ขายหมด';
  } else if (navBar === 'suspended') {
    newNavBar = 'ถูกระงับ';
  } else if (navBar === 'not for sale') {
    newNavBar = 'ยังไม่ลงขาย';
  } else {
    newNavBar = 'ทั้งหมด';
  }

  return (
    <>
      {trigerSearch === false ? (
        <div className="order_neworder_item2">
          สินค้า ({newNavBar}) {productSeller.length} ชิ้น
        </div>
      ) : (
        <div className="order_neworder_item2">
          ผลการค้นหา : พบสินค้า ({newNavBar}) {productSeller.length} ชิ้น
        </div>
      )}
    </>
  );
}

export default SellerAmountProduct;
