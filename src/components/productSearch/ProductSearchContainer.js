import { useEffect, useState } from 'react';
import Pagination from '../Pagination';
import axios from '../../config/axios';
import ProductItemSearch from './ProductItemSearch';

function ProductSearchContainer({ categorySearch, keySearch }) {
  const [productSearch, setProductSearch] = useState([]);

  useEffect(() => {
    const fetchProductSearch = async () => {
      try {
        const resProductSearch = await axios.get(
          `/products/search?keyword=${categorySearch}&&keyword=${keySearch}`
        );
        setProductSearch(resProductSearch.data.resultSearch);
      } catch (err) {}
    };

    fetchProductSearch();
  }, [keySearch, categorySearch]);

  const handleOnClickNewProduct = async () => {
    try {
    } catch (err) {}
  };

  const handleOnClickBestBuyProduct = async () => {
    try {
    } catch (err) {}
  };

  const handleOnClickLowToHighPrice = async () => {
    try {
    } catch (err) {}
  };

  const handleOnClickHighToLowPrice = async () => {
    try {
    } catch (err) {}
  };

  return (
    <>
      <div className="categoty_name">
        <span>หมวดหมู่ค้นหา: {categorySearch} </span>
        <span>ค้นหาสินค้า : {keySearch}</span>
      </div>
      {productSearch.length > 0 ? (
        <div>
          <div className="category_sortbar">
            <div className="category_sortbar_option">
              <div className="item1">เรียงโดย</div>
              <div className="item2">
                <button onClick={handleOnClickNewProduct}>สินค้าล่าสุด</button>
              </div>
              <div className="item3">
                <button onClick={handleOnClickBestBuyProduct}>
                  สินค้าขายดี
                </button>
              </div>
              <div className="item4">
                <div className="dropdown">
                  <button className="dropbtn">ราคา</button>
                  <div class="dropdown-content">
                    <buton onClick={handleOnClickLowToHighPrice}>
                      น้อย ไป มาก
                    </buton>
                    <br />
                    <buton onClick={handleOnClickHighToLowPrice}>
                      มาก ไป น้อย
                    </buton>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagination_top">
              <Pagination />
            </div>
          </div>
          <div className="category_main_productitem">
            {productSearch.map((el) => (
              <ProductItemSearch key={el.id} productSearch={el} />
            ))}
          </div>
          <div className="">
            <div className="pagination_buttom">
              <Pagination />
            </div>
          </div>
        </div>
      ) : (
        'ผลการค้นหา : ไม่พบรายการสินค้าที่ค้นหา'
      )}
    </>
  );
}

export default ProductSearchContainer;
