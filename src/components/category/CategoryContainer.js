import { useEffect, useState } from 'react';
import axios from '../../config/axios';
import Pagination from '../../components/Pagination';
import ProductItemCategory from './ProductItemCategory';

function CategoryContainer({ categoryName }) {
  const [productByCategory, setProductByCategory] = useState([]);

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
  }, [categoryName]);

  const handleOnClickNewProduct = async () => {
    try {
      const resProductByCategory = await axios.get(
        `products/category/bycategoryname?categoryName=${categoryName}`
      );
      setProductByCategory(resProductByCategory.data.productByCategory);
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
    } catch (err) {}
  };

  return (
    <>
      <div className="categoty_name">{categoryName}</div>
      <div className="category_sortbar">
        <div className="category_sortbar_option">
          <div className="item1">เรียงโดย</div>
          <div className="item2">
            <button onClick={handleOnClickNewProduct}>สินค้าล่าสุด</button>
          </div>
          <div className="item3">
            <button onClick={handleOnClickBestBuyProduct}>สินค้าขายดี</button>
          </div>
          <div className="item4">
            <div className="dropdown">
              <button className="dropbtn">ราคา</button>
              <div class="dropdown-content">
                <buton onClick={handleOnClickLowToHighPrice}>น้อย ไป มาก</buton>
                <br />
                <buton onClick={handleOnClickHighToLowPrice}>มาก ไป น้อย</buton>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination_top">
          <Pagination />
        </div>
      </div>
      <div className="category_main_productitem">
        {productByCategory.map((el) => (
          <ProductItemCategory key={el.id} productByCategory={el} />
        ))}
      </div>
      <div className="">
        <div className="pagination_buttom">
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default CategoryContainer;
