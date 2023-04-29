import CategoryPaginationItem from './CategoryPaginationItem';

function CategoryPaginationContainer({
  productPagination,
  paginationLimit,
  handleOnClickPagination,
  categoryName,
  orderBy,
  pageNumberShow,
  currentOffset,
}) {
  const productLength = productPagination.length;
  const pageCount = Math.ceil(productLength / paginationLimit);

  const pageNumber = [];
  let page = 0;
  for (let i = 1; i <= pageCount; i++) {
    page = page + 1;
    pageNumber.push(page);
  }

  const offset = [0];
  let j = 0;
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
      <button
        className="pagination_button"
        onClick={() =>
          handleOnClickPagination(
            categoryName,
            paginationLimit,
            currentOffset - 10,
            orderBy,
            pageNumberShow - 1
          )
        }
        disabled={pageNumberShow == 1 || currentOffset == 0 ? 'disabled' : ''}
      >
        &lt;
      </button>
      <div className="pagination_number">
        {paginationTotal.map((el) => (
          <CategoryPaginationItem
            key={el.id}
            paginationTotal={el}
            handleOnClickPagination={handleOnClickPagination}
            paginationLimit={paginationLimit}
            categoryName={categoryName}
            orderBy={orderBy}
            pageNumberShow={pageNumberShow}
          />
        ))}
      </div>
      <button
        className="pagination_button"
        onClick={() =>
          handleOnClickPagination(
            categoryName,
            paginationLimit,
            currentOffset + 10,
            orderBy,
            pageNumberShow + 1
          )
        }
        disabled={
          pageNumberShow == pageCount || currentOffset == pageCount - 1
            ? 'disabled'
            : ''
        }
      >
        &gt;
      </button>
    </>
  );
}

export default CategoryPaginationContainer;
