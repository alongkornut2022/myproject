import { Outlet } from 'react-router-dom';
import CategoryList from '../../components/category/CategoryList';

function ProductLayout() {
  return (
    <div className="home_main_content">
      <div className="home_main_content_top">
        <div className="home_main_content_top_left">
          <CategoryList />
        </div>
        <div className="category_main_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProductLayout;
