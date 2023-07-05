import CategoryItemOption from './CategoryItemOption';

function CategoryOption({ category, setSelectCategory, selectCategory }) {
  return (
    <div>
      <select onChange={(event) => setSelectCategory(event.target.value)}>
        <option>หมวดหมู่ทั้งหมด</option>
        {category.map((el) => (
          <CategoryItemOption
            key={el.id}
            category={el}
            selectCategory={selectCategory}
          />
        ))}
      </select>
    </div>
  );
}

export default CategoryOption;
