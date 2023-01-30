import React from 'react';
import CategoryList from '../components/CategoryList';
import ProductItem from '../components/ProductItem';

function HomePage() {
  return (
    <div className="home_main_content">
      <div className="home_main_content_top">
        <div className="home_main_content_top_left">
          <CategoryList />
        </div>
        <div className="home_main_content_top_center">
          <p>carousel_banner</p>
        </div>
        <div className="home_main_content_top_right"></div>
      </div>
      <div className="title_product">
        <p>สินค้าขายดี</p>
      </div>
      <div className="home_main_content_middle">
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
        <button>ดูเพิ่มเติม</button>
      </div>
      <div className="title_product">
        <p>สินค้าใหม่</p>
      </div>
      <div className="home_main_content_middle">
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
        <button>ดูเพิ่มเติม</button>
      </div>
    </div>
  );
}

export default HomePage;
