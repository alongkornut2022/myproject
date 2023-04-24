function ProductSortBar({ dataSortBar, limit, offset }) {
  const {
    sortPrice,
    sortProduct,
    handleOnClickNewProduct,
    handleOnClickBestBuyProduct,
    handleOnClickLowToHighPrice,
    handleOnClickHighToLowPrice,
  } = dataSortBar;

  return (
    <>
      <div className="category_sortbar">
        <div className="category_sortbar_container">
          <div className="category_sortbar_option">
            <div className="item1">
              <h5>เรียงโดย</h5>
            </div>
            <div
              className={
                sortProduct === null
                  ? 'item2'
                  : sortProduct
                  ? 'item2-2'
                  : 'item2'
              }
            >
              <button onClick={() => handleOnClickNewProduct(limit, offset)}>
                สินค้าล่าสุด
              </button>
            </div>
            <div
              className={
                sortProduct === null
                  ? 'item3'
                  : sortProduct
                  ? 'item3'
                  : 'item3-2'
              }
            >
              <button
                onClick={() => handleOnClickBestBuyProduct(limit, offset)}
              >
                สินค้าขายดี
              </button>
            </div>
            <div className="item4">
              <div className="dropdown-sortprice">
                <button
                  className={
                    sortPrice === null
                      ? 'dropbtn-sortprice'
                      : 'dropbtn-sortprice-2'
                  }
                >
                  ราคา :
                  {sortPrice === null
                    ? ''
                    : sortPrice
                    ? ' น้อย ไป มาก'
                    : ' มาก ไป น้อย'}
                </button>
                <div class="dropdown-content-sortprice">
                  <buton
                    onClick={() => handleOnClickLowToHighPrice(limit, offset)}
                  >
                    ราคา: น้อย ไป มาก
                  </buton>
                  <br /> <br />
                  <buton
                    onClick={() => handleOnClickHighToLowPrice(limit, offset)}
                  >
                    ราคา: มาก ไป น้อย
                  </buton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSortBar;
