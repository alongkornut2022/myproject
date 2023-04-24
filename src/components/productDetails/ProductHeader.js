import { Link } from 'react-router-dom';

function ProductHeader({ productItem }) {
  const { categoryName, productName } = productItem;
  return (
    <>
      <div>
        <Link end to="/">
          website Name
        </Link>
      </div>
      <div> &gt;</div>
      <div>
        <Link end to={`/Product/Category/${categoryName}`}>
          {categoryName}
        </Link>
      </div>
      <div> &gt;</div>
      <div>{productName}</div>
    </>
  );
}

export default ProductHeader;
