import { useContext, useEffect, useState } from 'react';
import CategoryItemList from './CategoryItemList';
import axios from '../../config/axios';
import { ErrorContext } from '../../contexts/ErrorContext';

function CategoryList() {
  const [category, setCategory] = useState([]);

  const { setError } = useContext(ErrorContext);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const resCategory = await axios.get('/products/category/');
        setCategory(resCategory.data.category);
      } catch (err) {
        setError(err.response.data.message);
      }
    };
    fetchCategory();
  }, []);

  return (
    <>
      <ul>
        {category.map((el) => (
          <CategoryItemList key={el.id} category={el} />
        ))}
      </ul>
    </>
  );
}

export default CategoryList;
