import CategoryList from '../components/category/CategoryList';
import ProductNewContainer from '../components/productNew/ProductNewContainer';

function ProductNew() {
  return (
    <div className="home_main_content">
      <div className="home_main_content_top">
        <div className="home_main_content_top_left">
          <CategoryList />
        </div>
        <div className="category_main_content">
          <ProductNewContainer />
        </div>
      </div>
    </div>
  );
}

export default ProductNew;
