function PaginationItem({
  paginationTotal,
  paginationLimit,
  handleOnClickPagination,
}) {
  const { pageNumber, offset } = paginationTotal;

  return (
    <>
      <button
        onClick={() =>
          handleOnClickPagination(paginationLimit, offset, pageNumber)
        }
      >
        {pageNumber}
      </button>
    </>
  );
}

export default PaginationItem;
