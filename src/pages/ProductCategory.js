import { useParams } from 'react-router-dom';
import CategoryList from '../components/category/CategoryList';
import CategoryContainer from '../components/category/CategoryContainer';

function ProductCategory() {
  const { categoryName } = useParams();

  return (
    <div className="home_main_content">
      <div className="home_main_content_top">
        <div className="home_main_content_top_left">
          <CategoryList />
        </div>
        <div className="category_main_content">
          <CategoryContainer categoryName={categoryName} />
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
