import CategoryList from '../components/CategoryList';
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
      <div className="">
        <button>ดูเพิ่มเติม</button>
      </div>
      <div className="title_product">
        <p>สินค้าใหม่</p>
      </div>
      <div className="home_main_content_middle">
        <NewProduct />
      </div>
      <div className="">
        <button>ดูเพิ่มเติม</button>
      </div>
    </div>
  );
}

export default HomePage;
