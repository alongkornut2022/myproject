import { Link } from 'react-router-dom';

function CategoryItemList({ category }) {
  const { categoryName } = category;

  return (
    <>
      <div className="category_list">
        <li>
          <Link end to={`/Product/Category/${categoryName}`}>
            {categoryName}
          </Link>
        </li>
      </div>
    </>
  );
}

export default CategoryItemList;
