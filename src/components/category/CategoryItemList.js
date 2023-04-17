import { NavLink } from 'react-router-dom';

function CategoryItemList({ category }) {
  const { categoryId, categoryName } = category;

  return (
    <>
      <div className="category_list">
        <li>
          <NavLink end to={`/Product/Category/${categoryName}`}>
            {/* <NavLink end to={`/Product/Category/${categoryId}`}> */}
            {categoryName}
          </NavLink>
        </li>
      </div>
    </>
  );
}

export default CategoryItemList;
