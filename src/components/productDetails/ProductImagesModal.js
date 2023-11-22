function ProductImagesModal({
  productItem,
  size,
  sizeMainModal,
  imageMain,
  setImageMain,
  newArrayImage,
}) {
  const { productName } = productItem;

  return (
    <>
      <div className="product_images_madal">
        <div className="product_images_madal_left">
          <img src={imageMain} width={sizeMainModal} height={sizeMainModal} />
        </div>
        <div className="product_images_madal_right">
          <div className="item">
            <h5>{productName}</h5>
          </div>
          <div className="item">
            <div className="images_madal_item">
              {newArrayImage[0] ? (
                <img
                  src={newArrayImage[0]}
                  width={size}
                  height={size}
                  alt=""
                  onClick={() => {
                    setImageMain(newArrayImage[0]);
                  }}
                />
              ) : null}
            </div>
            <div className="images_madal_item">
              {newArrayImage[1] ? (
                <img
                  src={newArrayImage[1]}
                  width={size}
                  height={size}
                  alt=""
                  onClick={() => {
                    setImageMain(newArrayImage[1]);
                  }}
                />
              ) : null}
            </div>
            <div className="images_madal_item">
              {newArrayImage[2] ? (
                <img
                  src={newArrayImage[2]}
                  width={size}
                  height={size}
                  alt=""
                  onClick={() => {
                    setImageMain(newArrayImage[2]);
                  }}
                />
              ) : null}
            </div>
          </div>
          <div className="item">
            <div className="images_madal_item">
              {newArrayImage[3] ? (
                <img
                  src={newArrayImage[3]}
                  width={size}
                  height={size}
                  alt=""
                  onClick={() => {
                    setImageMain(newArrayImage[3]);
                  }}
                />
              ) : null}
            </div>
            <div className="images_madal_item">
              {newArrayImage[4] ? (
                <img
                  src={newArrayImage[4]}
                  width={size}
                  height={size}
                  alt=""
                  onClick={() => {
                    setImageMain(newArrayImage[4]);
                  }}
                />
              ) : null}
            </div>
            <div className="images_madal_item">
              {newArrayImage[5] ? (
                <img
                  src={newArrayImage[5]}
                  width={size}
                  height={size}
                  alt=""
                  onClick={() => {
                    setImageMain(newArrayImage[5]);
                  }}
                />
              ) : null}
            </div>
          </div>
          <div className="item">
            <div className="images_madal_item">
              {newArrayImage[6] ? (
                <img
                  src={newArrayImage[6]}
                  width={size}
                  height={size}
                  alt=""
                  onClick={() => {
                    setImageMain(newArrayImage[6]);
                  }}
                />
              ) : null}
            </div>
            <div className="images_madal_item">
              {newArrayImage[7] ? (
                <img
                  src={newArrayImage[7]}
                  width={size}
                  height={size}
                  alt=""
                  onClick={() => {
                    setImageMain(newArrayImage[7]);
                  }}
                />
              ) : null}
            </div>
            <div className="images_madal_item">
              {newArrayImage[8] ? (
                <img
                  src={newArrayImage[8]}
                  width={size}
                  height={size}
                  alt=""
                  onClick={() => {
                    setImageMain(newArrayImage[8]);
                  }}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductImagesModal;
