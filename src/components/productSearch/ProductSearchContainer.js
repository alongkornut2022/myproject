import { useEffect, useState } from 'react';
import Pagination from '../pagination/Pagination';
import axios from '../../config/axios';
import ProductItemSearch from './ProductItemSearch';
import ProductSortBar from '../ProductSortBar';

function ProductSearchContainer({ categorySearch, keySearch }) {
  const [productSearch, setProductSearch] = useState([]);
  const [sortPrice, setSortPrice] = useState(null);
  const [sortProduct, setSortProduct] = useState(null);

  const productPagination = productSearch;

  useEffect(() => {
    const fetchProductSearch = async () => {
      try {
        const resProductSearch = await axios.get(
          `/products/search?keyword=${categorySearch}&&keyword=${keySearch}&&keyword=p.created_at desc`
        );
        setProductSearch(resProductSearch.data.sortResultSearch);
        setSortPrice(null);
        setSortProduct(null);
      } catch (err) {}
    };

    fetchProductSearch();
  }, [keySearch, categorySearch]);

  const handleOnClickNewProduct = async () => {
    try {
      const resProductSearch = await axios.get(
        `/products/search?keyword=${categorySearch}&&keyword=${keySearch}&&keyword=p.created_at desc`
      );
      setProductSearch(resProductSearch.data.sortResultSearch);
      setSortProduct(true);
      setSortPrice(null);
    } catch (err) {}
  };

  const handleOnClickBestBuyProduct = async () => {
    try {
      const resProductSearch = await axios.get(
        `/products/search?keyword=${categorySearch}&&keyword=${keySearch}&&keyword=ps.alreadysold desc`
      );
      setProductSearch(resProductSearch.data.sortResultSearch);
      setSortProduct(false);
      setSortPrice(null);
    } catch (err) {}
  };

  const handleOnClickLowToHighPrice = async () => {
    try {
      const resProductSearch = await axios.get(
        `/products/search?keyword=${categorySearch}&&keyword=${keySearch}&&keyword=p.product_unitprice asc`
      );
      setProductSearch(resProductSearch.data.sortResultSearch);
      setSortPrice(true);
      setSortProduct(null);
    } catch (err) {}
  };

  const handleOnClickHighToLowPrice = async () => {
    try {
      const resProductSearch = await axios.get(
        `/products/search?keyword=${categorySearch}&&keyword=${keySearch}&&keyword=p.product_unitprice desc`
      );
      setProductSearch(resProductSearch.data.sortResultSearch);
      setSortPrice(false);
      setSortProduct(null);
    } catch (err) {}
  };

  const dataSortBar = {
    sortPrice,
    sortProduct,
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
            <ProductSortBar dataSortBar={dataSortBar} />
          </div>
          <div className="category_main_productitem">
            {productSearch.map((el) => (
              <ProductItemSearch key={el.id} productSearch={el} />
            ))}
          </div>

          <div className="pagination_container">
            <Pagination productPagination={productPagination} />
          </div>
        </div>
      ) : (
        'ผลการค้นหา : ไม่พบรายการสินค้าที่ค้นหา'
      )}
    </>
  );
}

export default ProductSearchContainer;
