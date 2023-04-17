import { useParams } from 'react-router-dom';
import CategoryList from '../components/category/CategoryList';
import ProductSearchContainer from '../components/productSearch/ProductSearchContainer';

function ProductSearch() {
  const { keyword } = useParams();

  return (
    <div className="home_main_content">
      <div className="home_main_content_top">
        <div className="home_main_content_top_left">
          <CategoryList />
        </div>
        <div className="category_main_content">
          <ProductSearchContainer keyword={keyword} />
        </div>
      </div>
    </div>
  );
}

export default ProductSearch;
