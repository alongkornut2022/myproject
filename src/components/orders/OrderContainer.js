import { useEffect, useRef, useState } from 'react';
import axios from '../../config/axios';
import PaymentMethod from '../../components/PaymentMethod';
import SellerItemOrder from './SellerItemOrder';
import CustomerAddressDelivery from '../OrderAddressDelivery';
import { Modal } from 'bootstrap';
import OrderAddressDeliveryModal from './OrderAddressDeliveryModalContainer';

function OrderContainer({ customerId, cartIds, customerAddressDefault }) {
  const modalEl = useRef();
  const [modal, setModal] = useState(null);

  const [customerAddressCurrent, setCustomerAddressCurrent] = useState('');
  const [cartSellerIds, setCartSellerIds] = useState([]);
  const [productItemPrice, setProductItemPrice] = useState([]);
  const [deliveryTotalPrice, setDeliveryTotalPrice] = useState();

  // console.log('default', customerAddressDefault);
  // console.log('current', customerAddressCurrent);
  console.log('0', deliveryTotalPrice);

  const allTotalPrice = productItemPrice.reduce((acc, item) => acc + item, 0);

  const resultTotalPrice = allTotalPrice + deliveryTotalPrice;

  const handleOnClickAddressCustomerById = async (customerAddressId) => {
    try {
      const resAddress = await axios.get(
        `/address/customer/${customerId}/${customerAddressId}`
      );
      setCustomerAddressCurrent(resAddress.data.customerAddress);
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMyCartBySeller = async () => {
    try {
      const resMyCartBySeller = await axios.get(
        `/cart/seller/${cartIds}/${customerId}`
      );
      setCartSellerIds(resMyCartBySeller.data.sellers);
      setProductItemPrice(resMyCartBySeller.data.productTotalPrice);
    } catch (err) {}
  };

  useEffect(() => {
    fetchMyCartBySeller();
  }, []);

  const handleClickModal = () => {
    const modalObj = new Modal(modalEl.current);
    setModal(modalObj);
    modalObj.show();
  };

  const closeModal = (event) => {
    modal.hide();
  };

  const handleOnClickCloseModal = () => {
    closeModal();
  };

  return (
    <>
      <div className="ordertotal_main_content">
        <div className="ordertotal_main_content_title">| ทำการสั่งซื้อ |</div>
        <div className="ordertotal_main_content_address">
          <div className="ordertotal_main_content_address_title">
            ที่อยู่ในการจัดส่ง
          </div>
          <div className="ordertotal_main_content_address_detail">
            <div className="ordertotal_main_content_address_detail_top">
              <CustomerAddressDelivery
                customerAddressCurrent={
                  customerAddressCurrent || customerAddressDefault
                }
              />
            </div>
            <div className="ordertotal_main_content_address_detail_buttom">
              <button onClick={handleClickModal}>เปลี่ยน</button>
            </div>
            <div className="modal fade" tabIndex="-1" ref={modalEl}>
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">ที่อยู่ของฉัน</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={handleOnClickCloseModal}
                    ></button>
                  </div>

                  <div className="modal-body">
                    <OrderAddressDeliveryModal
                      closeModal={closeModal}
                      customerId={customerId}
                      customerAddressDefaultId={customerAddressDefault.id}
                      handleOnClickAddressCustomerById={
                        handleOnClickAddressCustomerById
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product_sell_list">
          <div className="product_sell_list_title">สินค้าสั่งซื้อแล้ว</div>
          <div className="product_sell_listbar_top">
            <div className="item1"></div>
            <div className="item2">สินค้า</div>
            <div className="item3">ราคาต่อชิ้น</div>
            <div className="item4">จำนวน</div>
            <div className="item5">ราคารวม</div>
          </div>

          <div className="product_ordertotal_detail">
            {cartSellerIds.map((el) => (
              <SellerItemOrder
                key={el.id}
                cartSellerIds={el}
                customerId={customerId}
                cartIds={cartIds}
                customerPostcode={
                  customerAddressCurrent.postcode ||
                  customerAddressDefault.postcode
                }
                setDeliveryTotalPrice={setDeliveryTotalPrice}
              />
            ))}
          </div>
        </div>

        <div className="ordertotal_main_content_payment">
          <PaymentMethod />
        </div>

        <div className="ordertotal_main_content_allprice">
          <div className="product_allprice">
            <div className="item1">ยอดรวมสินค้า</div>
            <div className="item2">฿ {allTotalPrice}</div>
          </div>
          <div className="delivery_allprice">
            <div className="item1">รวมการจัดส่ง</div>
            <div className="item2">฿</div>
          </div>
          <div className="total_allprice">
            <div className="item1">การชำระเงินทั้งหมด</div>
            <div className="item2">฿ {resultTotalPrice}</div>
          </div>
        </div>

        <div className="ordertotal_button">
          <div className="item1"></div>
          <button>สั่งซื้อสินค้า</button>
        </div>
      </div>
    </>
  );
}

export default OrderContainer;
