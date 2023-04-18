import { NavLink } from 'react-router-dom';

function CategoryItemList({ category }) {
  const { categoryName } = category;

  return (
    <>
      <div className="category_list">
        <li>
          <NavLink end to={`/Product/Category/${categoryName}`}>
            {categoryName}
          </NavLink>
        </li>
      </div>
    </>
  );
}

export default CategoryItemList;
