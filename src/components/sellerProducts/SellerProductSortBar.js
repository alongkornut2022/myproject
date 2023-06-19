import { useEffect, useState } from 'react';
import axios from '../../config/axiosSeller';
import CategoryOption from '../category/CategoryOption';

function SellerProductSortBar({
  sellerId,
  setProductSeller,
  navBar,
  dataInputProductSortBar,
  setTrigerSearch,
}) {
  const [category, setCategory] = useState([]);

  const {
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
  } = dataInputProductSortBar;

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const resCategory = await axios.get('/products/category/');
        setCategory(resCategory.data.category);
      } catch (err) {}
    };
    fetchCategory();
  }, []);

  const handleOnClickSearchProduct = async () => {
    try {
      const resProductSort = await axios.get(
        `sellers/products/searchmultichoice/${sellerId}?navBar=${navBar}&&productName=${productName}&&selectCategory=${selectCategory}&&priceStart=${priceStart}&&priceTo=${priceTo}&&stockstartStart=${stockstartStart}&&stockstartTo=${stockstartTo}&&inventoryStart=${inventoryStart}&&inventoryTo=${inventoryTo}&&alreadysoldStart=${alreadysoldStart}&&alreadysoldTo=${alreadysoldTo}`
      );
      setProductSeller(resProductSort.data.productSeller);
      setTrigerSearch(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnClickReset = () => {
    setProductName('');
    setPriceStart('');
    setPriceTo('');
    setStockstartStart('');
    setStockstartTo('');
    setInventoryStart('');
    setInventoryTo('');
    setAlreadysoldStart('');
    setAlreadysoldTo('');
  };

  return (
    <>
      <div className="sellerorder_container_searchbar_main">
        <div className="sellerorder_container_searchbar_left">
          <div className="sellerorder_container_searchbar_productname">
            <div className="sellerorder_container_searchbar_productname_title">
              ชื่อสินค้า
            </div>
            <div className="sellerorder_container_searchbar_productname_input">
              <input
                type="text"
                placeholder="ชื่อสินค้า"
                value={productName}
                onChange={(event) => setProductName(event.target.value)}
              />
            </div>
          </div>

          <div className="sellerproduct_sort_catrgory">
            <div className="sellerorder_container_searchbar_productname_title">
              หมวดหมู่
            </div>
            <div>
              <CategoryOption
                category={category}
                selectCategory={selectCategory}
                setSelectCategory={setSelectCategory}
              />
            </div>
          </div>
        </div>

        <div className="sellerorder_container_searchbar_right">
          <div className="sellerproduct_sort_container">
            <div className="sellerproduct_sort_container_left">
              <div className="sellerproduct_sort_productprice">
                <div className="sellerproduct_sort_title">ราคา</div>
                <div>
                  <input
                    type="text"
                    value={priceStart}
                    onChange={(event) =>
                      setPriceStart(
                        event.target.value
                          .replace(/[^\d]/, '')
                          .replace(/^0/, '')
                      )
                    }
                  />
                </div>
                <div className="sellerproduct_sort_title_2"> - </div>
                <div>
                  <input
                    type="text"
                    value={priceTo}
                    onChange={(event) =>
                      setPriceTo(
                        event.target.value
                          .replace(/[^\d]/, '')
                          .replace(/^0/, '')
                      )
                    }
                  />
                </div>
              </div>

              <div className="sellerproduct_sort_stockstart">
                <div className="sellerproduct_sort_title">ยอดเต็ม</div>
                <div>
                  <input
                    type="text"
                    value={stockstartStart}
                    onChange={(event) =>
                      setStockstartStart(
                        event.target.value
                          .replace(/[^\d]/, '')
                          .replace(/^0/, '')
                      )
                    }
                  />
                </div>
                <div className="sellerproduct_sort_title_2"> - </div>
                <div>
                  <input
                    type="text"
                    value={stockstartTo}
                    onChange={(event) =>
                      setStockstartTo(
                        event.target.value
                          .replace(/[^\d]/, '')
                          .replace(/^0/, '')
                      )
                    }
                  />
                </div>
              </div>
            </div>

            <div className="sellerproduct_sort_container_right">
              <div className="sellerproduct_sort_inventory">
                <div className="sellerproduct_sort_title">คงคลัง</div>
                <div>
                  <input
                    type="text"
                    value={inventoryStart}
                    onChange={(event) =>
                      setInventoryStart(event.target.value.replace(/[^\d]/, ''))
                    }
                  />
                </div>
                <div className="sellerproduct_sort_title_2"> - </div>
                <div>
                  <input
                    type="text"
                    value={inventoryTo}
                    onChange={(event) =>
                      setInventoryTo(event.target.value.replace(/[^\d]/, ''))
                    }
                  />
                </div>
                <div></div>
              </div>

              <div className="sellerproduct_sort_alreadysold">
                <div className="sellerproduct_sort_title">ยอดขาย</div>
                <div>
                  <input
                    type="text"
                    value={alreadysoldStart}
                    onChange={(event) =>
                      setAlreadysoldStart(
                        event.target.value.replace(/[^\d]/, '')
                      )
                    }
                  />
                </div>
                <div className="sellerproduct_sort_title_2"> - </div>
                <div>
                  <input
                    type="text"
                    value={alreadysoldTo}
                    onChange={(event) =>
                      setAlreadysoldTo(event.target.value.replace(/[^\d]/, ''))
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sellerorder_container_searchbar_submit">
        <div className="submit">
          <button type="button" onClick={handleOnClickSearchProduct}>
            ค้นหา
          </button>
        </div>
        <div button className="reset">
          <button onClick={handleOnClickReset}>รีเซ็ต</button>
        </div>
      </div>
    </>
  );
}

export default SellerProductSortBar;
