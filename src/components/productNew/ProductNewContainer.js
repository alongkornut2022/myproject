import { useEffect, useState } from 'react';
import ProductItemNew from './ProductItemNew';
import axios from '../../config/axios';
import Pagination from '../pagination/Pagination';
import ProductSortBar from '../ProductSortBar';

function ProductNewContainer() {
  const [newProduct, setNewProduct] = useState([]);
  const [sortPrice, setSortPrice] = useState(null);
  const [sortProduct, setSortProduct] = useState(null);

  const fetchNewProduct = async () => {
    try {
      const resNewProduct = await axios.get(
        '/products/newproduct?limit=&&orderBy=p.created_at desc'
      );
      setNewProduct(resNewProduct.data.newProduct);
      setSortPrice(null);
      setSortProduct(null);
    } catch (err) {}
  };

  useEffect(() => {
    fetchNewProduct();
  }, []);

  const handleOnClickNewProduct = async () => {
    try {
      const resNewProduct = await axios.get(
        '/products/newproduct?limit=&&orderBy=p.created_at desc'
      );
      setNewProduct(resNewProduct.data.newProduct);
      setSortProduct(true);
      setSortPrice(null);
    } catch (err) {}
  };

  const handleOnClickBestBuyProduct = async () => {
    try {
      const resNewProduct = await axios.get(
        '/products/newproduct?limit=&&orderBy=ps.alreadysold desc'
      );
      setNewProduct(resNewProduct.data.newProduct);
      setSortProduct(false);
      setSortPrice(null);
    } catch (err) {}
  };

  const handleOnClickLowToHighPrice = async () => {
    try {
      const resNewProduct = await axios.get(
        '/products/newproduct?limit=&&orderBy=p.product_unitprice asc'
      );
      setNewProduct(resNewProduct.data.newProduct);
      setSortPrice(true);
      setSortProduct(null);
    } catch (err) {}
  };

  const handleOnClickHighToLowPrice = async () => {
    try {
      const resNewProduct = await axios.get(
        '/products/newproduct?limit=&&orderBy=p.product_unitprice desc'
      );
      setNewProduct(resNewProduct.data.newProduct);
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
      {/* <div className="categoty_name">สินค้าใหม่</div> */}
      <ProductSortBar dataSortBar={dataSortBar} />
      <div className="category_main_productitem">
        {newProduct.map((el) => (
          <ProductItemNew key={el.id} newProduct={el} />
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

export default ProductNewContainer;
