import { useEffect, useState } from 'react';
import ProductItemLowToHigh from './ProductItemLowToHigh';
import axios from '../../config/axios';
import Pagination from '../pagination/Pagination';
import ProductSortBar from '../ProductSortBar';

function ProductLowToHighContainer() {
  const [productPriceLTH, setProductPriceLTH] = useState([]);
  const [sortPrice, setSortPrice] = useState(null);
  const [sortProduct, setSortProduct] = useState(null);
  const [pageNumberShow, setPageNumberShow] = useState();
  const [currentOffset, setCurrentOffset] = useState(0);

  const [allProductPriceLTH, setAllProductPriceLTH] = useState([]);

  const productPagination = allProductPriceLTH;

  const productLength = productPagination.length;
  const limit = 10;
  const pageCount = Math.ceil(productLength / limit);

  useEffect(() => {
    const fetchAllProductPriceLTH = async (limit, offset) => {
      try {
        const resAllProductPriceLTH = await axios.get(
          `/products/sort?limit=${limit}&&offset=${offset}&&orderBy=p.product_unitprice asc`
        );
        setAllProductPriceLTH(resAllProductPriceLTH.data.productSort);
      } catch (err) {}
    };
    fetchAllProductPriceLTH('', '');
  }, []);

  const handleOnClickProductPriceLTH = async (limit, offset, pageNumber) => {
    try {
      const resProductPriceLTH = await axios.get(
        `/products/sort?limit=${limit}&&offset=${offset}&&orderBy=p.product_unitprice asc`
      );
      setProductPriceLTH(resProductPriceLTH.data.productSort);
      setSortProduct(null);
      setSortPrice(true);
      setPageNumberShow(pageNumber);
      setCurrentOffset(offset);
    } catch (err) {}
  };

  useEffect(() => {
    handleOnClickProductPriceLTH(limit, 0, 1);
    setSortPrice(null);
    setSortProduct(null);
  }, []);

  const handleOnClickPagination = handleOnClickProductPriceLTH;
  const dataSortBar = {
    sortPrice,
    sortProduct,
    pageNumberShow,
    pageCount,
  };

  return (
    <>
      <ProductSortBar dataSortBar={dataSortBar} />
      <div className="category_main_productitem">
        {productPriceLTH.map((el) => (
          <ProductItemLowToHigh key={el.id} productPriceLTH={el} />
        ))}
      </div>

      <div className="pagination_container">
        <Pagination
          productPagination={productPagination}
          handleOnClickPagination={handleOnClickPagination}
          pageNumberShow={pageNumberShow}
          currentOffset={currentOffset}
        />
      </div>
    </>
  );
}

export default ProductLowToHighContainer;
