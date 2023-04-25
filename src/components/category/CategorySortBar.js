import PageNumberShow from '../pagination/PageNumberShow';

function CategorySortBar({ dataSortBar }) {
  const {
    sortPrice,
    sortProduct,
    pageNumberShow,
    pageCount,
    categoryName,
    paginationLimit,
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
              <button
                onClick={() =>
                  handleOnClickNewProduct(categoryName, paginationLimit, 0)
                }
              >
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
                onClick={() =>
                  handleOnClickBestBuyProduct(categoryName, paginationLimit, 0)
                }
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
                  <button
                    onClick={() =>
                      handleOnClickLowToHighPrice(
                        categoryName,
                        paginationLimit,
                        0
                      )
                    }
                  >
                    ราคา: น้อย ไป มาก
                  </button>
                  <br />
                  <button
                    onClick={() =>
                      handleOnClickHighToLowPrice(
                        categoryName,
                        paginationLimit,
                        0
                      )
                    }
                  >
                    ราคา: มาก ไป น้อย
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pagenumber_show">
            <PageNumberShow
              pageNumberShow={pageNumberShow}
              pageCount={pageCount}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CategorySortBar;
