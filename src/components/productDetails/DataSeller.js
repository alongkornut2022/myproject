function DataSeller({ productItem }) {
  const { shopName } = productItem;
  return (
    <div>
      <h4>ข้อมูลร้านค้า : {shopName} </h4>
    </div>
  );
}

export default DataSeller;
