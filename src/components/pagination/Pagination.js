import PaginationItem from './PaginationItem';

function Pagination({ productPagination }) {
  const paginationLimit = 10;
  const productLength = productPagination.length;
  const pageCount = Math.ceil(productLength / paginationLimit);

  const pageNumber = [];
  let page = 0;
  for (let i = 1; i <= pageCount; i++) {
    page = page + 1;
    pageNumber.push(page);
  }

  const offset = [1];
  let j = 1;
  for (let i = 2; i <= pageCount; i++) {
    j = j + paginationLimit;
    offset.push(j);
  }

  const paginationTotal = [];
  for (let i = 1; i <= pageCount; i++) {
    let item1 = pageNumber[i - 1];
    let item2 = offset[i - 1];
    let obj = { pageNumber: item1, offset: item2 };
    paginationTotal.push(obj);
  }

  return (
    <>
      <button className="pagination_button">&lt;</button>
      <div className="pagination_number">
        {paginationTotal.map((el) => (
          <PaginationItem key={el.id} paginationTotal={el} />
        ))}
      </div>
      <button className="pagination_button">&gt;</button>
    </>
  );
}

export default Pagination;
