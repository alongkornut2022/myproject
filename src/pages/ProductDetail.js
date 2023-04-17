import { useParams } from 'react-router-dom';
import ProductDetailContainer from '../components/productDetails/ProductDetailContainer';

function ProductDetail() {
  const { productId } = useParams();

  return (
    <div className="productdetail_main_content">
      <ProductDetailContainer productId={productId} />
    </div>
  );
}

export default ProductDetail;
