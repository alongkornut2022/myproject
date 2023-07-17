import { useEffect, useState } from 'react';
import CategoryItemList from './CategoryItemList';
import axios from '../../config/axios';

function CategoryList() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const resCategory = await axios.get('/products/category/');
        setCategory(resCategory.data.category);
      } catch (err) {}
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
