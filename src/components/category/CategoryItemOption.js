function CategoryItemOption({ category }) {
  const { categoryName } = category;

  return (
    <>
      <option value={categoryName}>{categoryName}</option>
    </>
  );
}

export default CategoryItemOption;
