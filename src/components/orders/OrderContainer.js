import { useEffect, useRef, useState } from 'react';
import axios from '../../config/axios';
import { Modal } from 'bootstrap';
import PaymentMethod from '../../components/PaymentMethod';
import SellerItemOrder from './SellerItemOrder';
import CustomerAddressDelivery from '../OrderAddressDelivery';
import OrderAddressDeliveryModal from './OrderAddressDeliveryModalContainer';
import { useNavigate } from 'react-router-dom';

function OrderContainer({ customerId, cartIds, customerAddressDefault }) {
  const modalEl = useRef();
  const [modal, setModal] = useState(null);

  const [customerAddressCurrent, setCustomerAddressCurrent] = useState('');
  const [cartSellerIds, setCartSellerIds] = useState([]);
  const [productItemPrice, setProductItemPrice] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [deliverys, setDeliverys] = useState();
  const [deliveryTotalPrice, setDeliveryTotalPrice] = useState(0);

  const navigate = useNavigate();

  let customerAddressId;

  if (customerAddressCurrent) {
    customerAddressId = customerAddressCurrent.id;
  } else {
    customerAddressId = customerAddressDefault.id;
  }

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
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMyCartBySeller();
  }, []);

  const fetchDeliveryPrice = async () => {
    try {
      const resDeliveryPrice = await axios.get(
        `/delivery/price/${cartIds}/${customerId}`
      );
      setDeliveryTotalPrice(resDeliveryPrice.data.deliveryPrice);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDeliveryPrice();
  }, [deliverys]);

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

  const sellerIdsArr = [];
  for (let item of cartSellerIds) {
    let i = item.sellerId;
    sellerIdsArr.push(i);
  }
  const sellerIds = sellerIdsArr.join(',');

  const handleOnClickOrderResult = async () => {
    try {
      const orderResult = await axios.post(
        `/purchase/order/${cartIds}/${sellerIds}/${customerId}`,
        {
          paymentMethod,
          customerAddressId,
        }
      );

      navigate(`/customer/purchase/${customerId}`);
    } catch (err) {
      console.log(err);
    }
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
                setDeliverys={setDeliverys}
              />
            ))}
          </div>
        </div>

        <div className="ordertotal_main_content_payment">
          <PaymentMethod setPaymentMethod={setPaymentMethod} />
        </div>

        <div className="ordertotal_main_content_allprice">
          <div className="product_allprice">
            <div className="item1">ยอดรวมสินค้า</div>
            <div className="item2">฿ {allTotalPrice}</div>
          </div>
          <div className="delivery_allprice">
            <div className="item1">รวมการจัดส่ง</div>
            <div className="item2">฿ {deliveryTotalPrice}</div>
          </div>
          <div className="total_allprice">
            <div className="item1">การชำระเงินทั้งหมด</div>
            <div className="item2">฿ {resultTotalPrice}</div>
          </div>
        </div>

        <div className="ordertotal_button">
          <div className="item1"></div>
          <button onClick={handleOnClickOrderResult}>สั่งซื้อสินค้า</button>
        </div>
      </div>
    </>
  );
}

export default OrderContainer;
