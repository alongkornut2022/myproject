import SellerProductListBarRight from './SellerProductListBarRight';

function SellerProductListBar({ handleOnClickSortProduct }) {
  return (
    <>
      <div className="orderresult_container_item_listbar_left">
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
              <button
                onClick={() => handleOnClickSortProduct('p.product_name')}
              >
                <i class="fa-solid fa-chevron-down"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <SellerProductListBarRight
        handleOnClickSortProduct={handleOnClickSortProduct}
      />
    </>
  );
}

export default SellerProductListBar;
