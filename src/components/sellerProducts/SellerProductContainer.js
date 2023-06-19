import { useEffect, useState } from 'react';
import axios from '../../config/axiosSeller';
import SellerProductNavBar from './SellerProductNavBar';
import SellerProductSortBar from './SellerProductSortBar';
import SellerAmountProduct from './SellerAmountProduct';
import SellerProductItem from './SellerProductItem';
import SellerProductListBar from './SellerProductListBar';

function SellerProductContainer({ seller }) {
  const [productSeller, setProductSeller] = useState([]);
  const [navBar, setNavBar] = useState('');

  const [trigerSearch, setTrigerSearch] = useState(false);

  const [selectCategory, setSelectCategory] = useState('หมวดหมู่ทั้งหมด');
  const [productName, setProductName] = useState('');
  const [priceStart, setPriceStart] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [stockstartStart, setStockstartStart] = useState('');
  const [stockstartTo, setStockstartTo] = useState('');
  const [inventoryStart, setInventoryStart] = useState('');
  const [inventoryTo, setInventoryTo] = useState('');
  const [alreadysoldStart, setAlreadysoldStart] = useState('');
  const [alreadysoldTo, setAlreadysoldTo] = useState('');

  console.log(productSeller);

  const fetchProductSeller = async (status) => {
    try {
      const resProductSeller = await axios.get(
        `/sellers/products/${seller.id}?status=${status}`
      );
      setProductSeller(resProductSeller.data.productSeller);
      setNavBar(status);
      setTrigerSearch(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProductSeller('ทั้งหมด');
  }, []);

  const handleOnClickSortProduct = async (sort) => {
    try {
      const resProductSeller = await axios.get(
        `sellers/products/sort/${seller.id}?navBar=${navBar}&&productName=${productName}&&selectCategory=${selectCategory}&&priceStart=${priceStart}&&priceTo=${priceTo}&&stockstartStart=${stockstartStart}&&stockstartTo=${stockstartTo}&&inventoryStart=${inventoryStart}&&inventoryTo=${inventoryTo}&&alreadysoldStart=${alreadysoldStart}&&alreadysoldTo=${alreadysoldTo}&&sort=${sort}`
      );
      setProductSeller(resProductSeller.data.productSeller);
    } catch (err) {
      console.log(err);
    }
  };

  const dataInputProductSortBar = {
    selectCategory,
    setSelectCategory,
    productName,
    setProductName,
    priceStart,
    setPriceStart,
    priceTo,
    setPriceTo,
    stockstartStart,
    setStockstartStart,
    stockstartTo,
    setStockstartTo,
    inventoryStart,
    setInventoryStart,
    inventoryTo,
    setInventoryTo,
    alreadysoldStart,
    setAlreadysoldStart,
    alreadysoldTo,
    setAlreadysoldTo,
  };

  return (
    <>
      <div className="orderresult_container_main">
        <div className="orderresult_container_navbar">
          <SellerProductNavBar
            fetchProductSeller={fetchProductSeller}
            navBar={navBar}
            productSeller={productSeller}
          />
        </div>

        <div className="sellerorder_container_searchbar">
          <SellerProductSortBar
            sellerId={seller.id}
            setProductSeller={setProductSeller}
            navBar={navBar}
            dataInputProductSortBar={dataInputProductSortBar}
            setTrigerSearch={setTrigerSearch}
          />

          {/* <div className="sellerorder_container_searchbar_left">
            <div className="orderresult_container_searchbar">
              <SellerProductSearchBar
                sellerId={seller.id}
                setProductSeller={setProductSeller}
                navBar={navBar}
                searchProduct={searchProduct}
                setSearchProduct={setSearchProduct}
                setTrigerSearch={setTrigerSearch}
              />
            </div>
          </div>

          <div className="sellerorder_container_searchbar_right">
            <SellerProductSortBar
              sellerId={seller.id}
              setProductSeller={setProductSeller}
              navBar={navBar}
            />
          </div> */}
        </div>

        <div className="orderresult_container_item_listbar">
          <SellerProductListBar
            handleOnClickSortProduct={handleOnClickSortProduct}
          />
        </div>

        <div className="order_neworder_container">
          <SellerAmountProduct
            productSeller={productSeller}
            navBar={navBar}
            trigerSearch={trigerSearch}
          />
        </div>

        <div className="orderresult_container_item">
          {productSeller.map((el) => (
            <SellerProductItem key={el.id} productSeller={el} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SellerProductContainer;
