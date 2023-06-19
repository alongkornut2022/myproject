import { useContext } from 'react';
import { AuthSellerContext } from '../../contexts/AuthSellerContext';
import SellerOrderContainer from '../../components/sellerOrder/SellerOrderContainer';

function SellerOrder() {
  const { seller } = useContext(AuthSellerContext);
  return (
    <>
      <SellerOrderContainer seller={seller} />
    </>
  );
}

export default SellerOrder;
