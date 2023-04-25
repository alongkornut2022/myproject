import { useEffect, useState } from 'react';
import axios from '../../config/axios';
import ProductItemCategory from './ProductItemCategory';
import CategorySortBar from './CategorySortBar';
import CategoryPaginationContainer from './CategoryPaginationContainer';

function CategoryContainer({ categoryName }) {
  const [productByCategory, setProductByCategory] = useState([]);
  const [sortPrice, setSortPrice] = useState(null);
  const [sortProduct, setSortProduct] = useState(null);
  const [pageNumberShow, setPageNumberShow] = useState(null);

  const [allProductByCategory, setAllProductByCategory] = useState([]);
  const [orderBy, setOrderBy] = useState('p.product_name');
  const productPagination = allProductByCategory;
  const productLength = productPagination.length;
  const paginationLimit = 10;
  const pageCount = Math.ceil(productLength / paginationLimit);

  useEffect(() => {
    const fetchAllProductByCategory = async (
      categoryName,
      paginationLimit,
      offset
    ) => {
      try {
        const resAllProductByCategory = await axios.get(
          `products/category/sort?categoryName=${categoryName}&&limit=${paginationLimit}&&offset=${offset}&&orderBy=p.created_at desc`
        );
        setAllProductByCategory(resAllProductByCategory.data.productByCategory);
      } catch (err) {}
    };
    fetchAllProductByCategory(categoryName, '', '');
  }, [categoryName]);

  useEffect(() => {
    const fetchProductByCategory = async (
      categoryName,
      paginationLimit,
      offset,
      orderBy
    ) => {
      try {
        const resProductByCategory = await axios.get(
          `products/category/sort?categoryName=${categoryName}&&limit=${paginationLimit}&&offset=${offset}&&orderBy=${orderBy}`
        );
        setProductByCategory(resProductByCategory.data.productByCategory);
        setSortPrice(null);
        setSortProduct(null);
        setPageNumberShow(null);
      } catch (err) {}
    };
    fetchProductByCategory(
      categoryName,
      paginationLimit,
      0,
      'p.created_at desc'
    );
  }, [categoryName]);

  const handleOnClickChangePage = async (
    categoryName,
    paginationlimit,
    offset,
    orderBy,
    pageNumber
  ) => {
    try {
      const resChangePage = await axios.get(
        `products/category/sort?categoryName=${categoryName}&&limit=${paginationlimit}&&offset=${offset}&&orderBy=${orderBy}`
      );
      setProductByCategory(resChangePage.data.productByCategory);
      setPageNumberShow(pageNumber);
    } catch (err) {}
  };

  const handleOnClickPagination = handleOnClickChangePage;

  const handleOnClickNewProduct = async (
    categoryName,
    paginationLimit,
    offset
  ) => {
    try {
      const resProductByCategory = await axios.get(
        `products/category/sort?categoryName=${categoryName}&&limit=${paginationLimit}&&offset=${offset}&&orderBy=p.created_at desc`
      );
      setProductByCategory(resProductByCategory.data.productByCategory);
      setSortProduct(true);
      setSortPrice(null);
      setOrderBy('p.created_at desc');
      setPageNumberShow(null);
    } catch (err) {}
  };

  const handleOnClickBestBuyProduct = async (
    categoryName,
    paginationLimit,
    offset
  ) => {
    try {
      const resProductByCategory = await axios.get(
        `products/category/sort?categoryName=${categoryName}&&limit=${paginationLimit}&&offset=${offset}&&orderBy=ps.alreadysold desc`
      );
      setProductByCategory(resProductByCategory.data.productByCategory);
      setSortProduct(false);
      setSortPrice(null);
      setOrderBy('ps.alreadysold desc');
      setPageNumberShow(null);
    } catch (err) {}
  };

  const handleOnClickLowToHighPrice = async (
    categoryName,
    paginationLimit,
    offset
  ) => {
    try {
      const resProductByCategory = await axios.get(
        `products/category/sort?categoryName=${categoryName}&&limit=${paginationLimit}&&offset=${offset}&&orderBy=p.product_unitprice asc`
      );
      setProductByCategory(resProductByCategory.data.productByCategory);
      setSortPrice(true);
      setSortProduct(null);
      setOrderBy('p.product_unitprice asc');
      setPageNumberShow(null);
    } catch (err) {}
  };

  const handleOnClickHighToLowPrice = async (
    categoryName,
    paginationLimit,
    offset
  ) => {
    try {
      const resProductByCategory = await axios.get(
        `products/category/sort?categoryName=${categoryName}&&limit=${paginationLimit}&&offset=${offset}&&orderBy=p.product_unitprice desc`
      );
      setProductByCategory(resProductByCategory.data.productByCategory);
      setSortPrice(false);
      setSortProduct(null);
      setOrderBy('p.product_unitprice desc');
      setPageNumberShow(null);
    } catch (err) {}
  };

  const dataSortBar = {
    sortPrice,
    sortProduct,
    pageNumberShow,
    pageCount,
    categoryName,
    paginationLimit,
    handleOnClickNewProduct,
    handleOnClickBestBuyProduct,
    handleOnClickLowToHighPrice,
    handleOnClickHighToLowPrice,
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pageNumberShow]);

  return (
    <>
      <div className="categoty_name">
        <h5>{categoryName}</h5>
      </div>
      <CategorySortBar dataSortBar={dataSortBar} />
      <div className="category_main_productitem">
        {productByCategory.map((el) => (
          <ProductItemCategory key={el.id} productByCategory={el} />
        ))}
      </div>

      <div className="pagination_container">
        <CategoryPaginationContainer
          productPagination={productPagination}
          categoryName={categoryName}
          handleOnClickPagination={handleOnClickPagination}
          paginationLimit={paginationLimit}
          orderBy={orderBy}
        />
      </div>
    </>
  );
}

export default CategoryContainer;
