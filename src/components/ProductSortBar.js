import { useNavigate } from 'react-router-dom';
import PageNumberShow from './pagination/PageNumberShow';

function ProductSortBar({ dataSortBar }) {
  const { sortPrice, sortProduct, pageNumberShow, pageCount } = dataSortBar;

  const navigate = useNavigate();

  const onClickNewProduct = () => {
    navigate('/Product/sortnewproduct');
  };

  const onClickBestBuyProduct = () => {
    navigate('/Product/sortbestbuy');
  };

  const onClickLowToHigh = () => {
    navigate('/Product/sortlowtohigh');
  };

  const onClickHighToLow = () => {
    navigate('/Product/sorthightolow');
  };

  return (
    <>
      <div className="category_sortbar">
        <div className="category_sortbar_container">
          <div className="category_sortbar_option">
            <div className="item1">เรียงโดย</div>
            <div
              className={
                sortProduct === null
                  ? 'item2'
                  : sortProduct
                  ? 'item2-2'
                  : 'item2'
              }
            >
              <button onClick={onClickNewProduct}>สินค้าล่าสุด</button>
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
              <button onClick={onClickBestBuyProduct}>สินค้าขายดี</button>
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
                  <button onClick={onClickLowToHigh}>ราคา: น้อย ไป มาก</button>
                  <br />
                  <button onClick={onClickHighToLow}>ราคา: มาก ไป น้อย</button>
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

export default ProductSortBar;
