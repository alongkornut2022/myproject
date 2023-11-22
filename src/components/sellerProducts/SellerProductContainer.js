import { useEffect, useState } from 'react';
import axios from '../../config/axiosSeller';
import SellerProductNavBar from './SellerProductNavBar';
import SellerProductSearchBar from './SellerProductSearchBar';
import SellerAmountProduct from './SellerAmountProduct';
import SellerProductItem from './SellerProductItem';
import SellerProductListBar from './SellerProductListBar';
import SellerProductItemGrid from './sellerProductItemGrid';

function SellerProductContainer({ seller }) {
  const [productSeller, setProductSeller] = useState([]);
  const [navBar, setNavBar] = useState('');
  const [viewProduct, setViewProduct] = useState(true);

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
          <SellerProductSearchBar
            sellerId={seller.id}
            setProductSeller={setProductSeller}
            navBar={navBar}
            dataInputProductSortBar={dataInputProductSortBar}
            setTrigerSearch={setTrigerSearch}
          />
        </div>

        <div className="orderresult_container_item_listbar">
          <SellerProductListBar
            handleOnClickSortProduct={handleOnClickSortProduct}
          />
        </div>

        <div className="order_neworder_container">
          <div className="seller_amount_product_container">
            <SellerAmountProduct
              productSeller={productSeller}
              navBar={navBar}
              trigerSearch={trigerSearch}
              viewProduct={viewProduct}
              setViewProduct={setViewProduct}
              handleOnClickSortProduct={handleOnClickSortProduct}
            />
          </div>
        </div>

        <div className="orderresult_container_item">
          <div
            className="orderresult_container_item_product_list"
            hidden={viewProduct === false ? 'hidden' : ''}
          >
            {productSeller.map((el) => (
              <SellerProductItem
                key={el.id}
                productSeller={el}
                seller={seller}
                handleOnClickSortProduct={handleOnClickSortProduct}
                fetchProductSeller={fetchProductSeller}
                navBar={navBar}
              />
            ))}
          </div>
          <div
            className="orderresult_container_item_product_grid"
            hidden={viewProduct === true ? 'hidden' : ''}
          >
            {productSeller.map((el) => (
              <SellerProductItemGrid key={el.id} productSeller={el} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerProductContainer;
