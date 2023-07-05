function SellerAmountProduct({
  productSeller,
  navBar,
  searchProduct,
  trigerSearch,
  viewProduct,
  setViewProduct,
  handleOnClickSortProduct,
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
      <div className="order_neworder_container_1">
        {trigerSearch === false ? (
          <div className="order_neworder_item2">
            สินค้า ({newNavBar}) {productSeller.length} รายการ
          </div>
        ) : (
          <div className="order_neworder_item2">
            ผลการค้นหา : พบสินค้า ({newNavBar}) {productSeller.length} รายการ
          </div>
        )}
      </div>
      <div className="order_neworder_container_2">
        <div className="order_neworder_container_2_0">
          <div className="order_neworder_container_right">
            <div className="orderresult_container_item_listbar_icon">
              <button
                onClick={() => handleOnClickSortProduct('p.created_at desc')}
              >
                <i class="fa-solid fa-chevron-up fa-xs"></i>
              </button>
            </div>
            เรียงตามวันที่เพิ่มสินค้า
            <div className="orderresult_container_item_listbar_icon">
              <button onClick={() => handleOnClickSortProduct('p.created_at')}>
                <i class="fa-solid fa-chevron-down fa-xs"></i>
              </button>
            </div>
          </div>

          <div className="order_neworder_container_right">
            <div className="orderresult_container_item_listbar_icon">
              <button
                onClick={() => handleOnClickSortProduct('p.updated_at desc')}
              >
                <i class="fa-solid fa-chevron-up fa-xs"></i>
              </button>
            </div>
            เรียงตามวันที่อัปเดตสินค้า
            <div className="orderresult_container_item_listbar_icon">
              <button onClick={() => handleOnClickSortProduct('p.updated_at')}>
                <i class="fa-solid fa-chevron-down fa-xs"></i>
              </button>
            </div>
          </div>
        </div>

        <div
          className={
            viewProduct === true
              ? 'order_neworder_container_2_2'
              : 'order_neworder_container_2_1'
          }
        >
          <button onClick={() => setViewProduct(true)}>
            <i class="fa-solid fa-list fa-lg"></i>
          </button>
        </div>
        <div
          className={
            viewProduct === false
              ? 'order_neworder_container_2_2'
              : 'order_neworder_container_2_1'
          }
        >
          <button onClick={() => setViewProduct(false)}>
            <i class="fa-solid fa-grip fa-lg"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default SellerAmountProduct;
