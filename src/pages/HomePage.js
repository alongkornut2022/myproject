import { Link } from 'react-router-dom';
import CategoryList from '../components/category/CategoryList';
import NewProduct from '../components/NewProduct';
import ProductBestBuy from '../components/ฺProductBestBuy';

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
        <div className="home_main_content_top_right">โฆษณา</div>
      </div>
      <div className="title_product">
        <p>สินค้าขายดี</p>
      </div>
      <div className="home_main_content_middle">
        <ProductBestBuy />
      </div>
      <div className="load_more">
        <Link end to="Product/productbestbuy">
          <button>ดูเพิ่มเติม</button>
        </Link>
      </div>
      <div className="title_product">
        <p>สินค้าใหม่</p>
      </div>
      <div className="home_main_content_middle">
        <NewProduct />
      </div>
      <div className="load_more">
        <Link end to="Product/newproduct">
          <button>ดูเพิ่มเติม</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
