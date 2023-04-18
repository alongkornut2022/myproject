import { useEffect, useState } from 'react';
import ProductItemNew from './ProductItemNew';
import axios from '../../config/axios';
import Pagination from '../Pagination';

function ProductNewContainer() {
  const [newProduct, setNewProduct] = useState([]);

  const fetchNewProduct = async () => {
    try {
      const resNewProduct = await axios.get('/products/newproduct');
      setNewProduct(resNewProduct.data.newProduct);
    } catch (err) {}
  };

  useEffect(() => {
    fetchNewProduct();
  }, []);

  const handleOnClickNewProduct = async () => {
    try {
    } catch (err) {}
  };

  const handleOnClickBestBuyProduct = async () => {
    try {
    } catch (err) {}
  };

  const handleOnClickLowToHighPrice = async () => {
    try {
    } catch (err) {}
  };

  const handleOnClickHighToLowPrice = async () => {
    try {
    } catch (err) {}
  };

  return (
    <>
      <div className="categoty_name">สินค้าใหม่</div>
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
