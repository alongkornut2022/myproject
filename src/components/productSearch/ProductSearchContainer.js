import { useEffect, useState } from 'react';
import axios from '../../config/axios';
import ProductItemSearch from './ProductItemSearch';
import SearchPaginationContainer from './SearchPaginationContainer';
import SearchSortBar from './SearchSortBar';

function ProductSearchContainer({ categorySearch, keySearch }) {
  const [productSearch, setProductSearch] = useState([]);
  const [sortPrice, setSortPrice] = useState(null);
  const [sortProduct, setSortProduct] = useState(null);
  const [pageNumberShow, setPageNumberShow] = useState(1);
  const [currentOffset, setCurrentOffset] = useState(0);

  const [allProductSearch, setAllProductSearch] = useState([]);
  const [orderBy, setOrderBy] = useState('p.product_name');
  const productPagination = allProductSearch;
  const productLength = productPagination.length;
  const paginationLimit = 10;
  const pageCount = Math.ceil(productLength / paginationLimit);

  useEffect(() => {
    const fetchAllProductSearch = async (
      categorySearch,
      keySearch,
      paginationLimit,
      offset
    ) => {
      try {
        const resAllProductSearch = await axios.get(
          `/products/search/sort?categorySearch=${categorySearch}&&keySearch=${keySearch}&&limit=${paginationLimit}&&offset=${offset}&&orderBy=p.created_at desc`
        );
        setAllProductSearch(resAllProductSearch.data.sortResultSearch);
      } catch (err) {}
    };
    fetchAllProductSearch(categorySearch, keySearch, '', '');
  }, [categorySearch, keySearch]);

  useEffect(() => {
    const fetchProductSearch = async (
      categorySearch,
      keySearch,
      paginationLimit,
      offset,
      orderBy
    ) => {
      try {
        const resProductSearch = await axios.get(
          `/products/search/sort?categorySearch=${categorySearch}&&keySearch=${keySearch}&&limit=${paginationLimit}&&offset=${offset}&&orderBy=${orderBy}`
        );
        setProductSearch(resProductSearch.data.sortResultSearch);
        setSortPrice(null);
        setSortProduct(null);
        setOrderBy('p.product_name');
        setPageNumberShow(1);
        setCurrentOffset(offset);
      } catch (err) {}
    };
    fetchProductSearch(
      categorySearch,
      keySearch,
      paginationLimit,
      0,
      'p.product_name'
    );
  }, [categorySearch, keySearch]);

  const handleOnClickChangePage = async (
    categorySearch,
    keySearch,
    paginationLimit,
    offset,
    orderBy,
    pageNumber
  ) => {
    try {
      const resChangePage = await axios.get(
        `/products/search/sort?categorySearch=${categorySearch}&&keySearch=${keySearch}&&limit=${paginationLimit}&&offset=${offset}&&orderBy=${orderBy}`
      );
      setProductSearch(resChangePage.data.sortResultSearch);
      setPageNumberShow(pageNumber);
      setCurrentOffset(offset);
    } catch (err) {}
  };

  const handleOnClickPagination = handleOnClickChangePage;

  const handleOnClickNewProduct = async (
    categorySearch,
    keySearch,
    paginationLimit,
    offset
  ) => {
    try {
      const resProductSearch = await axios.get(
        `/products/search/sort?categorySearch=${categorySearch}&&keySearch=${keySearch}&&limit=${paginationLimit}&&offset=${offset}&&orderBy=p.created_at desc`
      );
      setProductSearch(resProductSearch.data.sortResultSearch);
      setSortProduct(true);
      setSortPrice(null);
      setOrderBy('p.created_at desc');
      setPageNumberShow(1);
      setCurrentOffset(offset);
    } catch (err) {}
  };

  const handleOnClickBestBuyProduct = async (
    categorySearch,
    keySearch,
    paginationLimit,
    offset
  ) => {
    try {
      const resProductSearch = await axios.get(
        `/products/search/sort?categorySearch=${categorySearch}&&keySearch=${keySearch}&&limit=${paginationLimit}&&offset=${offset}&&orderBy=ps.alreadysold desc`
      );
      setProductSearch(resProductSearch.data.sortResultSearch);
      setSortProduct(false);
      setSortPrice(null);
      setOrderBy('ps.alreadysold desc');
      setPageNumberShow(1);
      setCurrentOffset(offset);
    } catch (err) {}
  };

  const handleOnClickLowToHighPrice = async (
    categorySearch,
    keySearch,
    paginationLimit,
    offset
  ) => {
    try {
      const resProductSearch = await axios.get(
        `/products/search/sort?categorySearch=${categorySearch}&&keySearch=${keySearch}&&limit=${paginationLimit}&&offset=${offset}&&orderBy=p.product_unitprice asc`
      );
      setProductSearch(resProductSearch.data.sortResultSearch);
      setSortPrice(true);
      setSortProduct(null);
      setOrderBy('p.product_unitprice asc');
      setPageNumberShow(1);
      setCurrentOffset(offset);
    } catch (err) {}
  };

  const handleOnClickHighToLowPrice = async (
    categorySearch,
    keySearch,
    paginationLimit,
    offset
  ) => {
    try {
      const resProductSearch = await axios.get(
        `/products/search/sort?categorySearch=${categorySearch}&&keySearch=${keySearch}&&limit=${paginationLimit}&&offset=${offset}&&orderBy=p.product_unitprice desc`
      );
      setProductSearch(resProductSearch.data.sortResultSearch);
      setSortPrice(false);
      setSortProduct(null);
      setOrderBy('p.product_unitprice desc');
      setPageNumberShow(1);
      setCurrentOffset(offset);
    } catch (err) {}
  };

  const dataSortBar = {
    sortPrice,
    sortProduct,
    pageNumberShow,
    pageCount,
    categorySearch,
    keySearch,
    paginationLimit,
    handleOnClickNewProduct,
    handleOnClickBestBuyProduct,
    handleOnClickLowToHighPrice,
    handleOnClickHighToLowPrice,
  };

  return (
    <>
      <div className="pagesearch_title">
        <h5>
          หมวดหมู่ : <h5 className="item">{categorySearch} </h5>
        </h5>
        <h5>
          ค้นหา : <h5 className="item">{keySearch}</h5>
        </h5>
      </div>
      <br></br>
      {productSearch.length > 0 ? (
        <div>
          <div>
            <SearchSortBar dataSortBar={dataSortBar} />
          </div>
          <div className="category_main_productitem">
            {productSearch.map((el) => (
              <ProductItemSearch key={el.id} productSearch={el} />
            ))}
          </div>

          <div className="pagination_container">
            <SearchPaginationContainer
              productPagination={productPagination}
              handleOnClickPagination={handleOnClickPagination}
              categorySearch={categorySearch}
              keySearch={keySearch}
              paginationLimit={paginationLimit}
              orderBy={orderBy}
              pageNumberShow={pageNumberShow}
              currentOffset={currentOffset}
            />
          </div>
        </div>
      ) : (
        'ผลการค้นหา : ไม่พบรายการสินค้าที่ค้นหา'
      )}
    </>
  );
}

export default ProductSearchContainer;
