function SearchPaginationItem({
  paginationTotal,
  paginationLimit,
  handleOnClickPagination,
  categorySearch,
  keySearch,
  orderBy,
  pageNumberShow,
}) {
  const { pageNumber, offset } = paginationTotal;

  return (
    <>
      <div className={pageNumberShow == pageNumber ? 'item2' : 'item1'}>
        <button
          onClick={() =>
            handleOnClickPagination(
              categorySearch,
              keySearch,
              paginationLimit,
              offset,
              orderBy,
              pageNumber
            )
          }
        >
          {pageNumber}
        </button>
      </div>
    </>
  );
}

export default SearchPaginationItem;
