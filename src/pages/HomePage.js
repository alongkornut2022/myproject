import { Link } from 'react-router-dom';
import CategoryList from '../components/category/CategoryList';
import NewProduct from '../components/NewProduct';
import ProductBestBuy from '../components/ฺProductBestBuy';
import CarouselBannerContainer from '../components/banner/CarouselBannerContainer';
import CarouselBannerContainer2 from '../components/banner2/CarouselBannerContainer2';
import CarouselBannerContainer3 from '../components/banner3/CarouselBannerContainer3';

function HomePage() {
  return (
    <div className="home_main_content">
      <div className="home_main_content_top">
        <div className="home_main_content_top_left">
          <CategoryList />
        </div>
        <div className="home_main_content_top_center">
          <CarouselBannerContainer />
        </div>
        <div className="home_main_content_top_center2">
          <CarouselBannerContainer2 />
        </div>
        <div className="home_main_content_top_right">
          <CarouselBannerContainer3 />
        </div>
      </div>
      <div className="title_product">
        <p>สินค้าขายดี</p>
      </div>
      <div className="home_main_content_middle">
        <ProductBestBuy />
      </div>
      <div className="load_more">
        <Link end to="Product/sortbestbuy">
          <button>ดูเพิ่มเติม</button>
        </Link>
      </div>
      <br />
      <div className="title_product">
        <p>สินค้าใหม่</p>
      </div>
      <div className="home_main_content_middle">
        <NewProduct />
      </div>
      <div className="load_more">
        <Link end to="Product/sortnewproduct">
          <button>ดูเพิ่มเติม</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
