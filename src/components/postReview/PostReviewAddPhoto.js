import { useRef } from 'react';

function PostReviewAddPhoto({ dataInputAddPhoto }) {
  const {
    imageReview1,
    setImageReview1,
    imageReview2,
    setImageReview2,
    imageReview3,
    setImageReview3,
    imageReview4,
    setImageReview4,
  } = dataInputAddPhoto;

  const uploadImageEl1 = useRef();
  const uploadImageEl2 = useRef();
  const uploadImageEl3 = useRef();
  const uploadImageEl4 = useRef();

  return (
    <>
      <div className="sellerproductadd_input">
        {/* ----1---- */}
        <div className="sellerproductadd_image_item">
          <button onClick={() => uploadImageEl1.current.click()}>
            {imageReview1 ? '' : '+ Add Photo'}
          </button>

          {imageReview1 ? (
            <img
              src={
                typeof imageReview1 === 'string'
                  ? imageReview1
                  : URL.createObjectURL(imageReview1)
              }
            />
          ) : (
            ''
          )}

          <div
            className="sellerproductadd_image_item_2"
            hidden={imageReview1 ? '' : 'hidden'}
          >
            <button onClick={() => setImageReview1(null)}>
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
                setImageReview1(event.target.files[0]);
              }
            }
          }}
          hidden="hidden"
        />
        {/* ----2---- */}
        <div className="sellerproductadd_image_item">
          <button onClick={() => uploadImageEl2.current.click()}>
            {imageReview2 ? '' : '+ Add Photo'}
          </button>

          {imageReview2 ? (
            <img
              src={
                typeof imageReview2 === 'string'
                  ? imageReview2
                  : URL.createObjectURL(imageReview2)
              }
            />
          ) : (
            ''
          )}

          <div
            className="sellerproductadd_image_item_2"
            hidden={imageReview2 ? '' : 'hidden'}
          >
            <button onClick={() => setImageReview2(null)}>
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
                setImageReview2(event.target.files[0]);
              }
            }
          }}
          hidden="hidden"
        />
        {/* ----3---- */}
        <div className="sellerproductadd_image_item">
          <button onClick={() => uploadImageEl3.current.click()}>
            {imageReview3 ? '' : '+ Add Photo'}
          </button>

          {imageReview3 ? (
            <img
              src={
                typeof imageReview3 === 'string'
                  ? imageReview3
                  : URL.createObjectURL(imageReview3)
              }
            />
          ) : (
            ''
          )}

          <div
            className="sellerproductadd_image_item_2"
            hidden={imageReview3 ? '' : 'hidden'}
          >
            <button onClick={() => setImageReview3(null)}>
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
                setImageReview3(event.target.files[0]);
              }
            }
          }}
          hidden="hidden"
        />
        {/* ----4---- */}
        <div className="sellerproductadd_image_item">
          <button onClick={() => uploadImageEl4.current.click()}>
            {imageReview4 ? '' : '+ Add Photo'}
          </button>

          {imageReview4 ? (
            <img
              src={
                typeof imageReview4 === 'string'
                  ? imageReview4
                  : URL.createObjectURL(imageReview4)
              }
            />
          ) : (
            ''
          )}

          <div
            className="sellerproductadd_image_item_2"
            hidden={imageReview4 ? '' : 'hidden'}
          >
            <button onClick={() => setImageReview4(null)}>
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
                setImageReview4(event.target.files[0]);
              }
            }
          }}
          hidden="hidden"
        />
      </div>
      <div className="sellerproductadd_input_validate">
        (รูปภาพขนาดไม่เกิน 1 MB)
      </div>
    </>
  );
}

export default PostReviewAddPhoto;
