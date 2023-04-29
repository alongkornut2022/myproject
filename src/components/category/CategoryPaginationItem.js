function CategoryPaginationItem({
  paginationTotal,
  paginationLimit,
  handleOnClickPagination,
  categoryName,
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
              categoryName,
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

export default CategoryPaginationItem;
