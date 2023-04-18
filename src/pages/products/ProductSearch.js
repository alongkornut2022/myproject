import { useParams } from 'react-router-dom';
import ProductSearchContainer from '../../components/productSearch/ProductSearchContainer';

function ProductSearch() {
  const { keyword } = useParams();

  const findIndex = keyword.indexOf('=');
  const categorySearch = keyword.slice(0, findIndex);
  const keySearch = keyword.slice(findIndex + 1);

  return (
    <>
      <ProductSearchContainer
        categorySearch={categorySearch}
        keySearch={keySearch}
      />
    </>
  );
}

export default ProductSearch;
