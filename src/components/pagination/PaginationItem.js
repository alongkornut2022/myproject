function PaginationItem({
  paginationTotal,
  paginationLimit,
  handleOnClickPagination,
  pageNumberShow,
}) {
  const { pageNumber, offset } = paginationTotal;

  return (
    <>
      <div className={pageNumberShow == pageNumber ? 'item2' : 'item1'}>
        <button
          onClick={() =>
            handleOnClickPagination(paginationLimit, offset, pageNumber)
          }
        >
          {pageNumber}
        </button>
      </div>
    </>
  );
}

export default PaginationItem;
