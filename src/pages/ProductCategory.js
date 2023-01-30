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
          <div>ชื่อ Category</div>
          <div className="category_sortbar">
            <div className="category_sortbar_option">
              <div>เรียงโดย</div>
              <div>สินค้าล่าสุด</div>
              <div>สินค้าขายดี</div>
              <div>ราคา มาก ไป น้อย</div>
              <div>ราคา น้อย ไป มาก</div>
            </div>
            <div>
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
          <div className="pagination_buttom">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
