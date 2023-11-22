import { Modal } from 'bootstrap';
import { useEffect, useRef, useState } from 'react';
import arrowLeft from '../../images/chevron-left.svg';
import arrowRight from '../../images/chevron-right.svg';
import ProductImagesModal from './ProductImagesModal';

function ProductItemImages({ productItem, size, sizeMain }) {
  const {
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    inventory,
  } = productItem;

  const modalEl = useRef();

  const arrayImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  const newArrayImage = arrayImages.filter((item) => item != null);

  const [imageMain, setImageMain] = useState(newArrayImage[0]);
  const [imageShow1, setImageShow1] = useState(newArrayImage[0]);
  const [imageShow2, setImageShow2] = useState(newArrayImage[1]);
  const [imageShow3, setImageShow3] = useState(newArrayImage[2]);
  const [imageShow4, setImageShow4] = useState(newArrayImage[3]);
  const [imageShow5, setImageShow5] = useState(newArrayImage[4]);
  const [count, setCount] = useState(0);

  const handleOnClickArrowLeft = () => {
    if (count === newArrayImage.length - 5) {
    } else {
      setCount(+count + 1);
    }
  };
  const handleOnClickArrowRight = () => {
    if (count === 0) {
    } else {
      setCount(+count - 1);
    }
  };

  useEffect(() => {
    setImageShow1(newArrayImage[count + 0]);
    setImageShow2(newArrayImage[count + 1]);
    setImageShow3(newArrayImage[count + 2]);
    setImageShow4(newArrayImage[count + 3]);
    setImageShow5(newArrayImage[count + 4]);
  }, [count]);

  const onClickModalImages = () => {
    const modalObj = new Modal(modalEl.current);
    modalObj.show();
  };

  return (
    <>
      <div className="productitem_image_main">
        <div className="productitem_image_main_inner">
          <img
            src={imageMain}
            width={sizeMain}
            height={sizeMain}
            alt=""
            onClick={onClickModalImages}
          />
          <div
            className="productitem_image_main_outofstock"
            hidden={inventory === 0 ? '' : 'hidden'}
          >
            <div className="productitem_image_main_outofstock_item">
              สินค้าหมด
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          newArrayImage.length > 5
            ? 'productitem_image_overview'
            : 'productitem_image_overview_2'
        }
      >
        {newArrayImage.length > 4 ? (
          <button onClick={handleOnClickArrowRight}>
            <img src={arrowLeft} tabIndex="1" />
          </button>
        ) : null}

        <div className="productitem_image_overview_item">
          <img
            src={imageShow1}
            width={size}
            height={size}
            alt=""
            onClick={onClickModalImages}
            onMouseOver={() => {
              setImageMain(imageShow1);
            }}
          />
        </div>

        <div className="productitem_image_overview_item">
          {imageShow2 ? (
            <img
              src={imageShow2}
              width={size}
              height={size}
              alt=""
              onClick={onClickModalImages}
              onMouseOver={() => {
                setImageMain(imageShow2);
              }}
            />
          ) : null}
        </div>

        <div className="productitem_image_overview_item">
          {imageShow3 ? (
            <img
              src={imageShow3}
              width={size}
              height={size}
              alt=""
              onClick={onClickModalImages}
              onMouseOver={() => {
                setImageMain(imageShow3);
              }}
            />
          ) : null}
        </div>

        <div className="productitem_image_overview_item">
          {imageShow4 ? (
            <img
              src={imageShow4}
              width={size}
              height={size}
              alt=""
              onClick={onClickModalImages}
              onMouseOver={() => {
                setImageMain(imageShow4);
              }}
            />
          ) : null}
        </div>

        <div className="productitem_image_overview_item">
          {imageShow5 ? (
            <img
              src={imageShow5}
              width={size}
              height={size}
              alt=""
              onClick={onClickModalImages}
              onMouseOver={() => {
                setImageMain(imageShow5);
              }}
            />
          ) : null}
        </div>

        {newArrayImage.length > 5 ? (
          <button className="btn_arrow">
            <img
              src={arrowRight}
              onClick={handleOnClickArrowLeft}
              tabIndex="1"
            />
          </button>
        ) : null}
      </div>

      <div className="modal fade" tabIndex="-1" ref={modalEl}>
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-body">
              <ProductImagesModal
                productItem={productItem}
                size="80"
                sizeMainModal="450"
                imageMain={imageMain}
                setImageMain={setImageMain}
                newArrayImage={newArrayImage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItemImages;
