import CategoryList from '../components/category/CategoryList';
import ProductBestBuyContainer from '../components/productBestBuy/ProductBestBuyContainer';

function ProductBestBuy() {
  return (
    <div className="home_main_content">
      <div className="home_main_content_top">
        <div className="home_main_content_top_left">
          <CategoryList />
        </div>
        <div className="category_main_content">
          <ProductBestBuyContainer />
        </div>
      </div>
    </div>
  );
}

export default ProductBestBuy;
