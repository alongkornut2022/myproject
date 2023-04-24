import { useEffect, useState } from 'react';
import axios from '../../config/axios';
import Pagination from '../pagination/Pagination';
import ProductItemCategory from './ProductItemCategory';
import ProductSortBar from '../ProductSortBar';

function CategoryContainer({ categoryName }) {
  const [productByCategory, setProductByCategory] = useState([]);
  const [sortPrice, setSortPrice] = useState(null);
  const [sortProduct, setSortProduct] = useState(null);

  const productPagination = productByCategory;

  useEffect(() => {
    const fetchProductByCategory = async () => {
      try {
        const resProductByCategory = await axios.get(
          `products/category/bycategoryname?categoryName=${categoryName}`
        );

        setProductByCategory(resProductByCategory.data.productByCategory);
      } catch (err) {}
    };
    fetchProductByCategory();
    setSortPrice(null);
    setSortProduct(null);
  }, [categoryName]);

  const handleOnClickNewProduct = async () => {
    try {
      const resProductByCategory = await axios.get(
        `products/category/bycategoryname?categoryName=${categoryName}`
      );
      setProductByCategory(resProductByCategory.data.productByCategory);
      setSortProduct(true);
      setSortPrice(null);
    } catch (err) {}
  };

  const handleOnClickBestBuyProduct = async () => {
    try {
      const resProductByCategory = await axios.get(
        `products/category/sortbestbuy/bycategoryname?categoryName=${categoryName}`
      );
      setProductByCategory(
        resProductByCategory.data.productByCategorySortAlreadysold
      );
      setSortProduct(false);
      setSortPrice(null);
    } catch (err) {}
  };

  const handleOnClickLowToHighPrice = async () => {
    try {
      const resProductByCategory = await axios.get(
        `products/category/sortlowprice/bycategoryname?categoryName=${categoryName}`
      );
      setProductByCategory(
        resProductByCategory.data.productByCategorySortPriceASC
      );
      setSortPrice(true);
      setSortProduct(null);
    } catch (err) {}
  };

  const handleOnClickHighToLowPrice = async () => {
    try {
      const resProductByCategory = await axios.get(
        `products/category/sorthighprice/bycategoryname?categoryName=${categoryName}`
      );
      setProductByCategory(
        resProductByCategory.data.productByCategorySortPriceDESC
      );
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
      <div className="categoty_name">
        <h4>{categoryName}</h4>
      </div>
      <ProductSortBar dataSortBar={dataSortBar} />
      <div className="category_main_productitem">
        {productByCategory.map((el) => (
          <ProductItemCategory key={el.id} productByCategory={el} />
        ))}
      </div>

      <div className="pagination_container">
        <Pagination productPagination={productPagination} />
      </div>
    </>
  );
}

export default CategoryContainer;
