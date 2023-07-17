import { Modal } from 'bootstrap';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SellerProductEditModal from './SellerProductEditModal';
import SellerProductListBarRight from './SellerProductListBarRight';

function SellerProductItem({
  productSeller,
  seller,
  handleOnClickSortProduct,
  fetchProductSeller,
  navBar,
}) {
  const {
    productId,
    productName,
    image1,
    productUnitprice,
    stockStart,
    alreadysold,
    inventory,
  } = productSeller;

  const modalEl = useRef();
  const [modal, setModal] = useState(null);

  const handleClickModal = () => {
    const modalObj = new Modal(modalEl.current);
    setModal(modalObj);
    modalObj.show();
  };

  return (
    <>
      <div className="orderresult_container_item_main">
        <div className="orderresult_item_top">
          <div className="order_item_product_container">
            <div className="order_item_product_container_left">
              <div className="sellerproduct_item_product_item1">
                <div className="sellerproduct_item_product_item1_1">
                  <Link end to={`/productdetail/${productId}`}>
                    <img src={image1} />
                  </Link>
                </div>
                <div className="sellerproduct_item_product_item1_2">
                  <Link end to={`/productdetail/${productId}`}>
                    {productName}
                  </Link>
                </div>
              </div>
            </div>

            <SellerProductListBarRight
              handleOnClickSortProduct={handleOnClickSortProduct}
            />

            <div className="order_item_product_container_right">
              <div className="order_item_product_item2">
                <div className="item2_1">฿ {productUnitprice}</div>
              </div>
              <div className="order_item_product_item3">
                {stockStart} / {inventory}
              </div>
              <div className="order_item_product_item4">
                <div>{alreadysold}</div>
              </div>
              <div className="order_item_product_item5">
                <button onClick={handleClickModal}>แก้ไข</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" tabIndex="-1" ref={modalEl}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">สินค้าของฉัน</h5>
            </div>

            <div className="modal-body">
              <SellerProductEditModal
                productId={productId}
                seller={seller}
                modal={modal}
                fetchProductSeller={fetchProductSeller}
                navBar={navBar}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerProductItem;
