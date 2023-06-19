import axios from '../../config/axios';

function SellerProductSearchBar({
  sellerId,
  setProductSeller,
  navBar,
  searchProduct,
  setSearchProduct,
  setTrigerSearch,
}) {
  const handleEnterSearchProduct = async (event) => {
    if (event.key === 'Enter') {
      try {
        const resSearchProduct = await axios.get(
          `/sellers/products/search/${sellerId}?keyword=${searchProduct}&&navBar=${navBar}`
        );
        setProductSeller(resSearchProduct.data.productSeller);
        setTrigerSearch(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleOnClickSearchProduct = async () => {
    try {
      const resSearchProduct = await axios.get(
        `/sellers/products/search/${sellerId}?keyword=${searchProduct}&&navBar=${navBar}`
      );
      setProductSeller(resSearchProduct.data.productSeller);
      setTrigerSearch(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="orderresult_searchbar_button">
        <button onClick={handleOnClickSearchProduct}>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="orderresult_searchbar_input">
        <input
          type="text"
          placeholder=" ค้นหาชื่อสินค้า"
          onChange={(event) => setSearchProduct(event.target.value)}
          onKeyDown={handleEnterSearchProduct}
        />
      </div>
    </>
  );
}

export default SellerProductSearchBar;
