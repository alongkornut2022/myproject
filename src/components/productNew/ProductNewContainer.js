import { useEffect, useState } from 'react';
import ProductItemNew from './ProductItemNew';
import axios from '../../config/axios';
import Pagination from '../pagination/Pagination';
import ProductSortBar from '../ProductSortBar';

function ProductNewContainer() {
  const [newProduct, setNewProduct] = useState([]);
  const [sortPrice, setSortPrice] = useState(null);
  const [sortProduct, setSortProduct] = useState(null);
  const [pageNumberShow, setPageNumberShow] = useState();
  const [currentOffset, setCurrentOffset] = useState(0);

  const [allNewProduct, setAllNewProduct] = useState([]);

  const productPagination = allNewProduct;

  const productLength = productPagination.length;
  const limit = 10;
  const pageCount = Math.ceil(productLength / limit);

  useEffect(() => {
    const fetchAllNewProduct = async (limit, offset) => {
      try {
        const resAllNewProduct = await axios.get(
          `/products/sort?limit=${limit}&&offset=${offset}&&orderBy=p.created_at desc`
        );
        setAllNewProduct(resAllNewProduct.data.productSort);
      } catch (err) {}
    };
    fetchAllNewProduct('', '');
  }, []);

  const handleOnClickNewProduct = async (limit, offset, pageNumber) => {
    try {
      const resNewProduct = await axios.get(
        `/products/sort?limit=${limit}&&offset=${offset}&&orderBy=p.created_at desc`
      );
      setNewProduct(resNewProduct.data.productSort);
      setSortProduct(true);
      setSortPrice(null);
      setPageNumberShow(pageNumber);
      setCurrentOffset(offset);
    } catch (err) {}
  };

  useEffect(() => {
    handleOnClickNewProduct(limit, 0, 1);
    setSortPrice(null);
    setSortProduct(null);
  }, []);

  const handleOnClickPagination = handleOnClickNewProduct;

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
        {newProduct.map((el) => (
          <ProductItemNew key={el.id} newProduct={el} />
        ))}
      </div>
      <div className="">
        <div className="pagination_container">
          <Pagination
            productPagination={productPagination}
            handleOnClickPagination={handleOnClickPagination}
            pageNumberShow={pageNumberShow}
            currentOffset={currentOffset}
          />
        </div>
      </div>
    </>
  );
}

export default ProductNewContainer;
