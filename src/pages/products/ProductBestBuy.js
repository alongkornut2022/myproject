import { useParams } from 'react-router-dom';
import ProductBestBuyContainer from '../../components/productBestBuy/ProductBestBuyContainer';

function ProductBestBuy() {
  const { offset } = useParams();
  return (
    <>
      <ProductBestBuyContainer offset={offset} />
    </>
  );
}

export default ProductBestBuy;
