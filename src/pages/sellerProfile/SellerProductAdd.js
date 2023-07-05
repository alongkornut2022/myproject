import { useContext } from 'react';
import { AuthSellerContext } from '../../contexts/AuthSellerContext';
import SellerProductAddContainer from '../../components/sellerProductsAdd/SellerProductAddContainer';

function SellerProductAdd() {
  const { seller } = useContext(AuthSellerContext);
  return (
    <>
      <SellerProductAddContainer seller={seller} />
    </>
  );
}

export default SellerProductAdd;
