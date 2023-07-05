function CategoryItemOption({ category, selectCategory }) {
  const { categoryName } = category;

  return (
    <>
      <option
        value={categoryName}
        selected={selectCategory === categoryName ? 'selected' : ''}
      >
        {categoryName}
      </option>
    </>
  );
}

export default CategoryItemOption;
