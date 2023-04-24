import { useEffect, useState } from 'react';
import ProductItemBestBuy from './ProductItemBestBuy';
import axios from '../../config/axios';
import Pagination from '../pagination/Pagination';
import ProductSortBar from '../ProductSortBar';

function ProductBestBuyContainer({ offset }) {
  const [productBestBuy, setProductBestBuy] = useState([]);
  const [sortPrice, setSortPrice] = useState(null);
  const [sortProduct, setSortProduct] = useState(null);

  const [allProductBestBuy, setAllProductBestBuy] = useState([]);

  const productPagination = allProductBestBuy;
  const limit = 10;

  useEffect(() => {
    const fetchAllProductBestBuy = async (limit, offset) => {
      try {
        const resAllProductBestBuy = await axios.get(
          `/products/bestbuy?limit=${limit}&&offset=${offset}&&orderBy=ps.alreadysold desc`
        );
        setAllProductBestBuy(resAllProductBestBuy.data.productBestBuy);
      } catch (err) {}
    };
    fetchAllProductBestBuy('', '');
  }, []);

  useEffect(() => {
    const fetchProductBestBuy = async (limit, offset) => {
      try {
        const resProductBestBuy = await axios.get(
          `/products/bestbuy?limit=${limit}&&offset=${offset}&&orderBy=ps.alreadysold desc`
        );
        setProductBestBuy(resProductBestBuy.data.productBestBuy);
      } catch (err) {}
    };
    fetchProductBestBuy(limit, offset);
    setSortPrice(null);
    setSortProduct(null);
  }, [offset]);

  const handleOnClickNewProduct = async (limit, offset) => {
    try {
      const resProductBestBuy = await axios.get(
        `/products/bestbuy?limit=${limit}&&offset=${offset}&&orderBy=p.created_at desc`
      );
      setProductBestBuy(resProductBestBuy.data.productBestBuy);
      setSortProduct(true);
      setSortPrice(null);
    } catch (err) {}
  };

  const handleOnClickBestBuyProduct = async (limit, offset) => {
    try {
      const resProductBestBuy = await axios.get(
        `/products/bestbuy?limit=${limit}&&offset=${offset}&&orderBy=ps.alreadysold desc`
      );
      setProductBestBuy(resProductBestBuy.data.productBestBuy);
      setSortProduct(false);
      setSortPrice(null);
    } catch (err) {}
  };

  const handleOnClickLowToHighPrice = async (limit, offset) => {
    try {
      const resProductBestBuy = await axios.get(
        `/products/bestbuy?limit=${limit}&&offset=${offset}&&orderBy=p.product_unitprice asc`
      );
      setProductBestBuy(resProductBestBuy.data.productBestBuy);
      setSortPrice(true);
      setSortProduct(null);
    } catch (err) {}
  };

  const handleOnClickHighToLowPrice = async (limit, offset) => {
    try {
      const resProductBestBuy = await axios.get(
        `/products/bestbuy?limit=${limit}&&offset=${offset}&&orderBy=p.product_unitprice desc`
      );
      setProductBestBuy(resProductBestBuy.data.productBestBuy);
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
      <ProductSortBar dataSortBar={dataSortBar} limit={limit} offset={offset} />
      <div className="category_main_productitem">
        {productBestBuy.map((el) => (
          <ProductItemBestBuy key={el.id} productBestBuy={el} />
        ))}
      </div>

      <div className="pagination_container">
        <Pagination productPagination={productPagination} />
      </div>
    </>
  );
}

export default ProductBestBuyContainer;
