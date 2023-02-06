import React from 'react';
import CategoryList from '../components/CategoryList';
import Pagination from '../components/Pagination';
import ProductItem from '../components/ProductItem';

function ProductCategory() {
  return (
    <div className="home_main_content">
      <div className="home_main_content_top">
        <div className="home_main_content_top_left">
          <CategoryList />
        </div>
        <div className="category_main_content">
          <div className="categoty_name">ชื่อ Category</div>
          <div className="category_sortbar">
            <div className="category_sortbar_option">
              <div className="item1">เรียงโดย</div>
              <div className="item2">สินค้าล่าสุด</div>
              <div className="item3">สินค้าขายดี</div>
              <div className="item4">
                <form>
                  <label>ราคา</label>
                  <select name="filterbyprice">
                    <option value="low price to high price">น้อย ไป มาก</option>
                    <option value="high price to low price">มาก ไป น้อย</option>
                  </select>
                </form>
              </div>
            </div>
            <div className="pagination_top">
              <Pagination />
            </div>
          </div>
          <div className="category_main_productitem">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
          <div className="">
            <div className="pagination_buttom">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
