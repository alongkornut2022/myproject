function SellerOrderListBar({ handleOnClickSearchOrder }) {
  return (
    <>
      <div className="sellerorder_container_item_listbar_right">
        <div className="sellerorder_container_item_listbar_item2">
          <div className="orderresult_container_item_listbar_icon">
            <button
              onClick={() =>
                handleOnClickSearchOrder('od.product_total_price desc')
              }
            >
              <i class="fa-solid fa-chevron-up fa-xs"></i>
            </button>
          </div>
          ยอดรวมคำสั่งซื้อ
          <div className="orderresult_container_item_listbar_icon">
            <button
              onClick={() => handleOnClickSearchOrder('od.product_total_price')}
            >
              <i class="fa-solid fa-chevron-down fa-xs"></i>
            </button>
          </div>
        </div>
        <div className="sellerorder_container_item_listbar_item3">สถานะ</div>
        <div className="sellerorder_container_item_listbar_item4">
          รูปแบบจัดส่ง
        </div>
        <div className="sellerorder_container_item_listbar_item5">
          ดำเนินการ
        </div>
      </div>
    </>
  );
}

export default SellerOrderListBar;
