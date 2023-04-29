import { useEffect, useState } from 'react';
import ProductItemBestBuy from './ProductItemBestBuy';
import axios from '../../config/axios';
import Pagination from '../pagination/Pagination';
import ProductSortBar from '../ProductSortBar';

function ProductBestBuyContainer() {
  const [productBestBuy, setProductBestBuy] = useState([]);
  const [sortPrice, setSortPrice] = useState(null);
  const [sortProduct, setSortProduct] = useState(null);
  const [pageNumberShow, setPageNumberShow] = useState();
  const [currentOffset, setCurrentOffset] = useState(0);

  const [allProductBestBuy, setAllProductBestBuy] = useState([]);
  const productPagination = allProductBestBuy;
  const productLength = productPagination.length;
  const limit = 10;
  const pageCount = Math.ceil(productLength / limit);

  useEffect(() => {
    const fetchAllProductBestBuy = async (limit, offset) => {
      try {
        const resAllProductBestBuy = await axios.get(
          `/products/sort?limit=${limit}&&offset=${offset}&&orderBy=ps.alreadysold desc`
        );
        setAllProductBestBuy(resAllProductBestBuy.data.productSort);
      } catch (err) {}
    };
    fetchAllProductBestBuy('', '');
  }, []);

  const handleOnClickBestBuyProduct = async (limit, offset, pageNumber) => {
    try {
      const resProductBestBuy = await axios.get(
        `/products/sort?limit=${limit}&&offset=${offset}&&orderBy=ps.alreadysold desc`
      );
      setProductBestBuy(resProductBestBuy.data.productSort);
      setSortProduct(false);
      setSortPrice(null);
      setPageNumberShow(pageNumber);
      setCurrentOffset(offset);
    } catch (err) {}
  };

  useEffect(() => {
    handleOnClickBestBuyProduct(limit, 0, 1);
    setSortPrice(null);
    setSortProduct(null);
  }, []);

  const handleOnClickPagination = handleOnClickBestBuyProduct;
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
        {productBestBuy.map((el) => (
          <ProductItemBestBuy key={el.id} productBestBuy={el} />
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

export default ProductBestBuyContainer;
