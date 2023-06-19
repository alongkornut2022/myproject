import { useContext } from 'react';
import { AuthSellerContext } from '../../contexts/AuthSellerContext';
import SellerProductContainer from '../../components/sellerProducts/SellerProductContainer';

function SellerProductMain() {
  const { seller } = useContext(AuthSellerContext);
  return (
    <>
      <SellerProductContainer seller={seller} />
    </>
  );
}

export default SellerProductMain;
