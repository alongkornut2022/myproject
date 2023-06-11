import { useParams } from 'react-router-dom';
import axios from '../config/axios';
import OrderContainer from '../components/orders/OrderContainer';
import { useEffect, useState } from 'react';

function Order() {
  const { cartIds, customerId } = useParams();

  const [customerAddressDefault, setCustomerAddressDefault] = useState([]);

  const fetchAddressCustomerDefault = async () => {
    try {
      const resAddress = await axios.get(
        `/address/customer/default/${customerId}`
      );
      setCustomerAddressDefault(resAddress.data.customerAddressDefault);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAddressCustomerDefault();
  }, [customerId, cartIds]);

  return (
    <>
      <OrderContainer
        customerId={customerId}
        cartIds={cartIds}
        customerAddressDefault={
          customerAddressDefault ? customerAddressDefault : ''
        }
      />
    </>
  );
}

export default Order;
