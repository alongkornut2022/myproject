import { useState } from 'react';
import arrowLeft from '../../images/chevron-left.svg';
import arrowRight from '../../images/chevron-right.svg';

function ProductImagesModal({
  productItem,
  size,
  sizeMainModal,
  imageMain,
  setImageMain,
}) {
  const {
    productName,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  } = productItem;

  const [imageShowModal, setImageModal] = useState();

  return (
    <>
      <div className="product_images_madal">
        <div className="product_images_madal_left">
          <img src={imageMain} width={sizeMainModal} height={sizeMainModal} />
        </div>
        <div className="product_images_madal_right">
          <div className="item">
            <h4>{productName}</h4>
          </div>
          <div className="item">
            {image1 ? (
              <img
                src={image1}
                width={size}
                height={size}
                alt=""
                onClick={() => {
                  setImageMain(image1);
                }}
              />
            ) : null}
            {image2 ? (
              <img
                src={image2}
                width={size}
                height={size}
                alt=""
                onClick={() => {
                  setImageMain(image2);
                }}
              />
            ) : null}
            {image3 ? (
              <img
                src={image3}
                width={size}
                height={size}
                alt=""
                onClick={() => {
                  setImageMain(image3);
                }}
              />
            ) : null}
          </div>
          <div className="item">
            {image4 ? (
              <img
                src={image4}
                width={size}
                height={size}
                alt=""
                onClick={() => {
                  setImageMain(image4);
                }}
              />
            ) : null}
            {image5 ? (
              <img
                src={image5}
                width={size}
                height={size}
                alt=""
                onClick={() => {
                  setImageMain(image5);
                }}
              />
            ) : null}
            {image6 ? (
              <img
                src={image6}
                width={size}
                height={size}
                alt=""
                onClick={() => {
                  setImageMain(image6);
                }}
              />
            ) : null}
          </div>
          <div className="item">
            {image7 ? (
              <img
                src={image7}
                width={size}
                height={size}
                alt=""
                onClick={() => {
                  setImageMain(image7);
                }}
              />
            ) : null}
            {image8 ? (
              <img
                src={image8}
                width={size}
                height={size}
                alt=""
                onClick={() => {
                  setImageMain(image8);
                }}
              />
            ) : null}
            {image9 ? (
              <img
                src={image9}
                width={size}
                height={size}
                alt=""
                onClick={() => {
                  setImageMain(image9);
                }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductImagesModal;
