function PageNumberShow({ pageNumberShow, pageCount }) {
  return (
    <>
      <div className="item1">
        {pageNumberShow === 1 ? '1' : pageNumberShow} /
      </div>
      <div className="item2">{pageCount} หน้า</div>
    </>
  );
}

export default PageNumberShow;
