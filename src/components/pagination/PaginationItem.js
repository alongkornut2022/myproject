import { Link } from 'react-router-dom';

function PaginationItem({ paginationTotal }) {
  const { pageNumber, offset } = paginationTotal;

  return (
    <>
      <Link end to={`/Product/productbestbuy/${offset}`}>
        {pageNumber}
      </Link>
    </>
  );
}

export default PaginationItem;
