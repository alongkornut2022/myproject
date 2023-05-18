import { useParams } from 'react-router-dom';
import OrderResultContainer from '../components/orderResult/OrderResultContainer';

function OrderResult() {
  const { customerId } = useParams;
  return (
    <>
      <OrderResultContainer customerId={customerId} />
    </>
  );
}

export default OrderResult;
