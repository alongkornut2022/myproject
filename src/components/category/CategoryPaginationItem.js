function CategoryPaginationItem({
  paginationTotal,
  paginationLimit,
  handleOnClickPagination,
  categoryName,
  orderBy,
}) {
  const { pageNumber, offset } = paginationTotal;

  return (
    <>
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
    </>
  );
}

export default CategoryPaginationItem;
