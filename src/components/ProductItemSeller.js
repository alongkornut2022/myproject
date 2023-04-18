import { Link } from 'react-router-dom';

function ProductItemSeller({ productSeller }) {
  const { productId, image1, productName, productUnitprice, alreadysold } =
    productSeller;

  const refreshPage = () => {
    setTimeout(() => {
      window.location.reload(false);
    }, 0);
  };

  return (
    <>
      <Link end to={`/ProductDetail/${productId}`} onClick={refreshPage}>
        <div className="productitem_card">
          <div className="productitem_card_image">
            <img src={image1} sizes="200" />
          </div>
          <div className="productitem_card_detail">
            <div className="productitem_card_detail_top">
              <div className="productname">{productName}</div>
            </div>
            <div className="productitem_card_detail_buttom">
              <div className="productprice">ราคา {productUnitprice} บาท</div>
              <div className="productalreadysold">
                ขายแล้ว {alreadysold} ชิ้น
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductItemSeller;
