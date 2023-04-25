import { useEffect, useState } from 'react';
import ProductItemHighToLow from './ProductItemHighToLow';
import axios from '../../config/axios';
import Pagination from '../pagination/Pagination';
import ProductSortBar from '../ProductSortBar';

function ProductHighToLowContainer() {
  const [productPriceHTL, setProductPriceHTL] = useState([]);
  const [sortPrice, setSortPrice] = useState(null);
  const [sortProduct, setSortProduct] = useState(null);
  const [pageNumberShow, setPageNumberShow] = useState();

  const [allProductPriceHTL, setAllProductPriceHTL] = useState([]);

  const productPagination = allProductPriceHTL;

  const productLength = productPagination.length;
  const limit = 10;
  const pageCount = Math.ceil(productLength / limit);

  useEffect(() => {
    const fetchAllProductPriceHTL = async (limit, offset) => {
      try {
        const resAllProductPriceHTL = await axios.get(
          `/products/sort?limit=${limit}&&offset=${offset}&&orderBy=p.product_unitprice desc`
        );
        setAllProductPriceHTL(resAllProductPriceHTL.data.productSort);
      } catch (err) {}
    };
    fetchAllProductPriceHTL('', '');
  }, []);

  const handleOnClickProductPriceHTL = async (limit, offset, pageNumber) => {
    try {
      const resProductPriceHTL = await axios.get(
        `/products/sort?limit=${limit}&&offset=${offset}&&orderBy=p.product_unitprice desc`
      );
      setProductPriceHTL(resProductPriceHTL.data.productSort);
      setSortProduct(null);
      setSortPrice(false);
      setPageNumberShow(pageNumber);
    } catch (err) {}
  };

  useEffect(() => {
    handleOnClickProductPriceHTL(limit, 0);
    setSortPrice(null);
    setSortProduct(null);
  }, []);

  const handleOnClickPagination = handleOnClickProductPriceHTL;
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
        {productPriceHTL.map((el) => (
          <ProductItemHighToLow key={el.id} productPriceHTL={el} />
        ))}
      </div>

      <div className="pagination_container">
        <Pagination
          productPagination={productPagination}
          handleOnClickPagination={handleOnClickPagination}
        />
      </div>
    </>
  );
}

export default ProductHighToLowContainer;
