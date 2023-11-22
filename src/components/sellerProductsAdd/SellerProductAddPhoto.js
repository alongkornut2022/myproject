import { useRef } from 'react';

function SellerProductAddPhoto({ dataInputAddPhoto }) {
  const {
    image1,
    setImage1,
    image2,
    setImage2,
    image3,
    setImage3,
    image4,
    setImage4,
    image5,
    setImage5,
    image6,
    setImage6,
    image7,
    setImage7,
    image8,
    setImage8,
    image9,
    setImage9,
  } = dataInputAddPhoto;

  const uploadImageEl1 = useRef();
  const uploadImageEl2 = useRef();
  const uploadImageEl3 = useRef();
  const uploadImageEl4 = useRef();
  const uploadImageEl5 = useRef();
  const uploadImageEl6 = useRef();
  const uploadImageEl7 = useRef();
  const uploadImageEl8 = useRef();
  const uploadImageEl9 = useRef();

  return (
    <>
      <div className="sellerproductadd_title">รูปภาพสินค้า</div>
      <div className="sellerproductadd_input">
        <div className="sellerproductadd_input_photo">
          {/* ----1---- */}
          <div className="sellerproductadd_image_item">
            <button onClick={() => uploadImageEl1.current.click()}>
              {image1 ? '' : '+ Add Photo (ภาพหน้าปก)'}
            </button>

            {image1 ? (
              <img
                src={
                  typeof image1 === 'string'
                    ? image1
                    : URL.createObjectURL(image1)
                }
              />
            ) : (
              ''
            )}

            <div
              className="sellerproductadd_image_item_2"
              hidden={image1 ? '' : 'hidden'}
            >
              <button onClick={() => setImage1(null)}>
                <i class="fa-solid fa-circle-xmark fa-lg"></i>
              </button>
            </div>
          </div>

          <input
            type="file"
            ref={uploadImageEl1}
            onChange={(event) => {
              if (event.target.files[0].size > 1048576) {
                alert('รูปภาพขนาดต้องไม่เกิน 1 MB');
              } else {
                if (event.target.files[0]) {
                  setImage1(event.target.files[0]);
                }
              }
            }}
            hidden="hidden"
          />
          {/* ----2---- */}
          <div className="sellerproductadd_image_item">
            <button onClick={() => uploadImageEl2.current.click()}>
              {image2 ? '' : '+ Add Photo'}
            </button>

            {image2 ? (
              <img
                src={
                  typeof image2 === 'string'
                    ? image2
                    : URL.createObjectURL(image2)
                }
              />
            ) : (
              ''
            )}

            <div
              className="sellerproductadd_image_item_2"
              hidden={image2 ? '' : 'hidden'}
            >
              <button onClick={() => setImage2(null)}>
                <i class="fa-solid fa-circle-xmark fa-lg"></i>
              </button>
            </div>
          </div>

          <input
            type="file"
            ref={uploadImageEl2}
            onChange={(event) => {
              if (event.target.files[0].size > 1048576) {
                alert('รูปภาพขนาดต้องไม่เกิน 1 MB');
              } else {
                if (event.target.files[0]) {
                  setImage2(event.target.files[0]);
                }
              }
            }}
            hidden="hidden"
          />
          {/* ----3---- */}
          <div className="sellerproductadd_image_item">
            <button onClick={() => uploadImageEl3.current.click()}>
              {image3 ? '' : '+ Add Photo'}
            </button>

            {image3 ? (
              <img
                src={
                  typeof image3 === 'string'
                    ? image3
                    : URL.createObjectURL(image3)
                }
              />
            ) : (
              ''
            )}

            <div
              className="sellerproductadd_image_item_2"
              hidden={image3 ? '' : 'hidden'}
            >
              <button onClick={() => setImage3(null)}>
                <i class="fa-solid fa-circle-xmark fa-lg"></i>
              </button>
            </div>
          </div>

          <input
            type="file"
            ref={uploadImageEl3}
            onChange={(event) => {
              if (event.target.files[0].size > 1048576) {
                alert('รูปภาพขนาดต้องไม่เกิน 1 MB');
              } else {
                if (event.target.files[0]) {
                  setImage3(event.target.files[0]);
                }
              }
            }}
            hidden="hidden"
          />
          {/* ----4---- */}
          <div className="sellerproductadd_image_item">
            <button onClick={() => uploadImageEl4.current.click()}>
              {image4 ? '' : '+ Add Photo'}
            </button>

            {image4 ? (
              <img
                src={
                  typeof image4 === 'string'
                    ? image4
                    : URL.createObjectURL(image4)
                }
              />
            ) : (
              ''
            )}

            <div
              className="sellerproductadd_image_item_2"
              hidden={image4 ? '' : 'hidden'}
            >
              <button onClick={() => setImage4(null)}>
                <i class="fa-solid fa-circle-xmark fa-lg"></i>
              </button>
            </div>
          </div>

          <input
            type="file"
            ref={uploadImageEl4}
            onChange={(event) => {
              if (event.target.files[0].size > 1048576) {
                alert('รูปภาพขนาดต้องไม่เกิน 1 MB');
              } else {
                if (event.target.files[0]) {
                  setImage4(event.target.files[0]);
                }
              }
            }}
            hidden="hidden"
          />
          {/* ----5---- */}
          <div className="sellerproductadd_image_item">
            <button onClick={() => uploadImageEl5.current.click()}>
              {image5 ? '' : '+ Add Photo'}
            </button>

            {image5 ? (
              <img
                src={
                  typeof image5 === 'string'
                    ? image5
                    : URL.createObjectURL(image5)
                }
              />
            ) : (
              ''
            )}

            <div
              className="sellerproductadd_image_item_2"
              hidden={image5 ? '' : 'hidden'}
            >
              <button onClick={() => setImage5(null)}>
                <i class="fa-solid fa-circle-xmark fa-lg"></i>
              </button>
            </div>
          </div>

          <input
            type="file"
            ref={uploadImageEl5}
            onChange={(event) => {
              if (event.target.files[0].size > 1048576) {
                alert('รูปภาพขนาดต้องไม่เกิน 1 MB');
              } else {
                if (event.target.files[0]) {
                  setImage5(event.target.files[0]);
                }
              }
            }}
            hidden="hidden"
          />
          {/* ----6---- */}
          <div className="sellerproductadd_image_item">
            <button onClick={() => uploadImageEl6.current.click()}>
              {image6 ? '' : '+ Add Photo'}
            </button>

            {image6 ? (
              <img
                src={
                  typeof image6 === 'string'
                    ? image6
                    : URL.createObjectURL(image6)
                }
              />
            ) : (
              ''
            )}

            <div
              className="sellerproductadd_image_item_2"
              hidden={image6 ? '' : 'hidden'}
            >
              <button onClick={() => setImage6(null)}>
                <i class="fa-solid fa-circle-xmark fa-lg"></i>
              </button>
            </div>
          </div>

          <input
            type="file"
            ref={uploadImageEl6}
            onChange={(event) => {
              if (event.target.files[0].size > 1048576) {
                alert('รูปภาพขนาดต้องไม่เกิน 1 MB');
              } else {
                if (event.target.files[0]) {
                  setImage6(event.target.files[0]);
                }
              }
            }}
            hidden="hidden"
          />
          {/* -----7--- */}
          <div className="sellerproductadd_image_item">
            <button onClick={() => uploadImageEl7.current.click()}>
              {image7 ? '' : '+ Add Photo'}
            </button>

            {image7 ? (
              <img
                src={
                  typeof image7 === 'string'
                    ? image7
                    : URL.createObjectURL(image7)
                }
              />
            ) : (
              ''
            )}

            <div
              className="sellerproductadd_image_item_2"
              hidden={image7 ? '' : 'hidden'}
            >
              <button onClick={() => setImage7(null)}>
                <i class="fa-solid fa-circle-xmark fa-lg"></i>
              </button>
            </div>
          </div>

          <input
            type="file"
            ref={uploadImageEl7}
            onChange={(event) => {
              if (event.target.files[0].size > 1048576) {
                alert('รูปภาพขนาดต้องไม่เกิน 1 MB');
              } else {
                if (event.target.files[0]) {
                  setImage7(event.target.files[0]);
                }
              }
            }}
            hidden="hidden"
          />
          {/* ----8---- */}
          <div className="sellerproductadd_image_item">
            <button onClick={() => uploadImageEl8.current.click()}>
              {image8 ? '' : '+ Add Photo'}
            </button>

            {image8 ? (
              <img
                src={
                  typeof image8 === 'string'
                    ? image8
                    : URL.createObjectURL(image8)
                }
              />
            ) : (
              ''
            )}

            <div
              className="sellerproductadd_image_item_2"
              hidden={image8 ? '' : 'hidden'}
            >
              <button onClick={() => setImage8(null)}>
                <i class="fa-solid fa-circle-xmark fa-lg"></i>
              </button>
            </div>
          </div>

          <input
            type="file"
            ref={uploadImageEl8}
            onChange={(event) => {
              if (event.target.files[0].size > 1048576) {
                alert('รูปภาพขนาดต้องไม่เกิน 1 MB');
              } else {
                if (event.target.files[0]) {
                  setImage8(event.target.files[0]);
                }
              }
            }}
            hidden="hidden"
          />
          {/* ----9---- */}
          <div className="sellerproductadd_image_item">
            <button onClick={() => uploadImageEl9.current.click()}>
              {image9 ? '' : '+ Add Photo'}
            </button>

            {image9 ? (
              <img
                src={
                  typeof image9 === 'string'
                    ? image9
                    : URL.createObjectURL(image9)
                }
              />
            ) : (
              ''
            )}

            <div
              className="sellerproductadd_image_item_2"
              hidden={image9 ? '' : 'hidden'}
            >
              <button onClick={() => setImage9(null)}>
                <i class="fa-solid fa-circle-xmark fa-lg"></i>
              </button>
            </div>
          </div>

          <input
            type="file"
            ref={uploadImageEl9}
            onChange={(event) => {
              if (event.target.files[0].size > 1048576) {
                alert('รูปภาพขนาดต้องไม่เกิน 1 MB');
              } else {
                if (event.target.files[0]) {
                  setImage9(event.target.files[0]);
                }
              }
            }}
            hidden="hidden"
          />
          {/* -------- */}
        </div>
        <div className="sellerproductadd_input_validate">
          (รูปภาพขนาดไม่เกิน 1 MB และ ต้องมีรูปหน้าปก)
        </div>
      </div>
    </>
  );
}

export default SellerProductAddPhoto;
