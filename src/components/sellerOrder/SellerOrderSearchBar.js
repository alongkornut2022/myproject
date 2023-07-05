import axios from '../../config/axios';

function SellerOrderSearchBar({
  sellerId,
  setOrderSeller,
  navBar,
  dataInputOrderSearch,
}) {
  const {
    orderNumber,
    setOrderNumber,
    productName,
    setProductName,
    customer,
    setCustomer,
    orderDateStart,
    setOrderDateStart,
    orderDateTo,
    setOrderDateTo,
    orderSumPriceStart,
    setOrderSumPriceStart,
    orderSumPriceTo,
    setOrderSumPriceTo,
  } = dataInputOrderSearch;

  const sort = '';

  const handleOnClickSearchOrder = async () => {
    try {
      const resSearchOrder = await axios.get(
        `/sellers/order/search/${sellerId}?navBar=${navBar}&&orderNumber=${orderNumber}&&productName=${productName}&&customer=${customer}&&orderDateStart=${orderDateStart}&&orderDateTo=${orderDateTo}&&orderSumPriceStart=${orderSumPriceStart}&&orderSumPriceTo=${orderSumPriceTo}&&sort=${sort}`
      );
      setOrderSeller(resSearchOrder.data.orderSeller);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnClickReset = () => {
    setOrderNumber('');
    setProductName('');
    setCustomer('');
    setOrderDateStart('');
    setOrderDateTo('');
    setOrderSumPriceStart('');
    setOrderSumPriceTo('');
  };

  return (
    <>
      <div className="sellerorder_container_searchbar_main">
        <div className="sellerorder_container_searchbar_left">
          <div className="sellerorder_container_searchbar_left_inner">
            <div className="sellerorder_container_searchbar_right_ordercustomer">
              <div>หมายเลขคำสั่งซื้อ </div>
              <div>
                <input
                  type="text"
                  value={orderNumber}
                  onChange={(event) => setOrderNumber(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="sellerorder_container_searchbar_right_ordercustomer">
              <div>ชื่อสินค้า</div>
              <div>
                <input
                  type="text"
                  value={productName}
                  onChange={(event) => setProductName(event.target.value)}
                ></input>
              </div>
            </div>
            <div className="sellerorder_container_searchbar_right_ordercustomer">
              <div>ชื่อผู้ซื้อ</div>
              <div>
                <input
                  type="text"
                  value={customer}
                  onChange={(event) => setCustomer(event.target.value)}
                ></input>
              </div>
            </div>
          </div>
        </div>

        <div className="sellerorder_container_searchbar_right">
          <div className="sellerorder_container_searchbar_right_inner">
            <div className="sellerorder_container_searchbar_right_searchdate">
              <div>วันสั่งซื้อ</div>
              <div>
                <input
                  type="date"
                  value={orderDateStart}
                  onChange={(event) => setOrderDateStart(event.target.value)}
                ></input>
              </div>
              <div> - </div>
              <div>
                <input
                  type="date"
                  value={orderDateTo}
                  onChange={(event) => setOrderDateTo(event.target.value)}
                ></input>
              </div>
            </div>

            <div className="sellerorder_container_searchbar_right_searchpriceall">
              <div>ยอดรวมคำสั่งซื้อ</div>
              <div>
                <input
                  type="text"
                  value={orderSumPriceStart}
                  onChange={(event) =>
                    setOrderSumPriceStart(
                      event.target.value.replace(/[^\d]/, '').replace(/^0/, '')
                    )
                  }
                ></input>
              </div>
              <div> - </div>
              <div>
                <input
                  type="text"
                  value={orderSumPriceTo}
                  onChange={(event) =>
                    setOrderSumPriceTo(
                      event.target.value.replace(/[^\d]/, '').replace(/^0/, '')
                    )
                  }
                ></input>
              </div>
            </div>

            <div className="sellerorder_container_searchbar_submit">
              <div className="submit">
                <button type="button" onClick={handleOnClickSearchOrder}>
                  ค้นหา
                </button>
              </div>
              <div button className="reset">
                <button onClick={handleOnClickReset}>รีเซ็ต</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerOrderSearchBar;
