import { useParams } from 'react-router-dom';
import CategoryContainer from '../../components/category/CategoryContainer';

function ProductCategory() {
  const { categoryName } = useParams();

  return (
    <>
      <CategoryContainer categoryName={categoryName} />
    </>
  );
}

export default ProductCategory;
