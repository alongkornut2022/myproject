import CategoryItemOption from './CategoryItemOption';

function CategoryOption({ category, setSelectCategory }) {
  return (
    <div>
      <select onChange={(event) => setSelectCategory(event.target.value)}>
        <option>หมวดหมู่ทั้งหมด</option>
        {category.map((el) => (
          <CategoryItemOption key={el.id} category={el} />
        ))}
      </select>
    </div>
  );
}

export default CategoryOption;
