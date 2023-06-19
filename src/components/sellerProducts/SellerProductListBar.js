function SellerProductListBar({ handleOnClickSortProduct }) {
  return (
    <>
      <div className="orderresult_container_item_listbar_item1">
        <div className="orderresult_container_item_listbar_title">
          <div className="orderresult_container_item_listbar_icon">
            <button
              onClick={() => handleOnClickSortProduct('p.product_name desc')}
            >
              <i class="fa-solid fa-chevron-up"></i>
            </button>
          </div>
          ชื่อสินค้า
          <div className="orderresult_container_item_listbar_icon">
            <button onClick={() => handleOnClickSortProduct('p.product_name')}>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="orderresult_container_item_listbar_item2">
        <div className="orderresult_container_item_listbar_title">
          <div className="orderresult_container_item_listbar_icon">
            <button
              onClick={() =>
                handleOnClickSortProduct('p.product_unitprice desc')
              }
            >
              <i class="fa-solid fa-chevron-up"></i>
            </button>
          </div>
          ราคา
          <div className="orderresult_container_item_listbar_icon">
            <button
              onClick={() => handleOnClickSortProduct('p.product_unitprice')}
            >
              <i class="fa-solid fa-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="orderresult_container_item_listbar_item3">
        <div className="orderresult_container_item_listbar_title">
          <div className="orderresult_container_item_listbar_icon">
            <button
              onClick={() => handleOnClickSortProduct('ps.stock_start desc')}
            >
              <i class="fa-solid fa-chevron-up"></i>
            </button>
          </div>
          ยอดเต็ม
          <div className="orderresult_container_item_listbar_icon">
            <button onClick={() => handleOnClickSortProduct('ps.stock_start')}>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
          </div>
        </div>

        <div className="orderresult_container_item_listbar_title">
          <div className="orderresult_container_item_listbar_icon">
            <button
              onClick={() => handleOnClickSortProduct('ps.inventory desc')}
            >
              <i class="fa-solid fa-chevron-up"></i>
            </button>
          </div>
          คงคลัง
          <div className="orderresult_container_item_listbar_icon">
            <button onClick={() => handleOnClickSortProduct('ps.inventory')}>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="orderresult_container_item_listbar_item4">
        <div className="orderresult_container_item_listbar_title">
          <div className="orderresult_container_item_listbar_icon">
            <button
              onClick={() => handleOnClickSortProduct('ps.alreadysold desc')}
            >
              <i class="fa-solid fa-chevron-up"></i>
            </button>
          </div>
          ยอดขาย
          <div className="orderresult_container_item_listbar_icon">
            <button onClick={() => handleOnClickSortProduct('ps.alreadysold')}>
              <i class="fa-solid fa-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="orderresult_container_item_listbar_item5">
        การดำเนินการ
      </div>
    </>
  );
}

export default SellerProductListBar;
