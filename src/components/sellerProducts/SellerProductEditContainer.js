import { useEffect, useState } from 'react';
import axios from '../../config/axiosSeller';
import CategoryOption from '../category/CategoryOption';
import SellerProductAddPhoto from '../sellerProductsAdd/SellerProductAddPhoto';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner';

function SellerProductEditContainer({
  seller,
  productItem,
  productSpecInput,
  modal,
  setTrigerModal,
  productId,
  fetchProductItem,
}) {
  const [category, setCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState(
    productItem.categoryName
  );

  const [productName, setProductName] = useState(productItem.productName);
  const [productSpec, setProductSpec] = useState(`${productSpecInput}`);
  const [productUnitPrice, setProductUnitPrice] = useState(
    productItem.productUnitprice
  );
  const [productStock, setProductStock] = useState(productItem.stockStart);
  const [productWeight, setProductWeight] = useState(
    productItem.productWeightPiece
  );
  const [productStatus, setProductStatus] = useState(productItem.productStatus);

  const [image1, setImage1] = useState(productItem.image1);
  const [image2, setImage2] = useState(productItem.image2);
  const [image3, setImage3] = useState(productItem.image3);
  const [image4, setImage4] = useState(productItem.image4);
  const [image5, setImage5] = useState(productItem.image5);
  const [image6, setImage6] = useState(productItem.image6);
  const [image7, setImage7] = useState(productItem.image7);
  const [image8, setImage8] = useState(productItem.image8);
  const [image9, setImage9] = useState(productItem.image9);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const resCategory = await axios.get('/products/category/');
        setCategory(resCategory.data.category);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategory();
  }, []);

  const handleOnClickSubmitUpdate = async (productStatus) => {
    try {
      setLoading(true);

      const formData = new FormData();
      const indexImageUpdateArr = [];
      const indexImageNull = [];

      if (typeof image1 === 'object' && image1) {
        formData.append('productImages', image1);
        indexImageUpdateArr.push('0');
      } else if (image1 === null) {
        indexImageNull.push('0');
      }

      if (typeof image2 === 'object' && image2) {
        formData.append('productImages', image2);
        indexImageUpdateArr.push('1');
      } else if (image2 === null) {
        indexImageNull.push('1');
      }

      if (typeof image3 === 'object' && image3) {
        formData.append('productImages', image3);
        indexImageUpdateArr.push('2');
      } else if (image3 === null) {
        indexImageNull.push('2');
      }

      if (typeof image4 === 'object' && image4) {
        formData.append('productImages', image4);
        indexImageUpdateArr.push('3');
      } else if (image4 === null) {
        indexImageNull.push('3');
      }

      if (typeof image5 === 'object' && image5) {
        formData.append('productImages', image5);
        indexImageUpdateArr.push('4');
      } else if (image5 === null) {
        indexImageNull.push('4');
      }

      if (typeof image6 === 'object' && image6) {
        formData.append('productImages', image6);
        indexImageUpdateArr.push('5');
      } else if (image6 === null) {
        indexImageNull.push('5');
      }

      if (typeof image7 === 'object' && image7) {
        formData.append('productImages', image7);
        indexImageUpdateArr.push('6');
      } else if (image7 === null) {
        indexImageNull.push('6');
      }

      if (typeof image8 === 'object' && image8) {
        formData.append('productImages', image8);
        indexImageUpdateArr.push('7');
      } else if (image8 === null) {
        indexImageNull.push('7');
      }

      if (typeof image9 === 'object' && image9) {
        formData.append('productImages', image9);
        indexImageUpdateArr.push('8');
      } else if (image9 === null) {
        indexImageNull.push('8');
      }

      const indexImageUpdateStr = indexImageUpdateArr.join(',');
      const indexImageNullStr = indexImageNull.join(',');

      const productImages = await axios.patch(
        `sellers/products/images/${seller.id}/${productId}?indexImageUpdateStr=${indexImageUpdateStr}&&indexImageNullStr=${indexImageNullStr}`,
        formData
      );

      if (productImages.data.message === 'update images success') {
        const productItem = await axios.patch(
          `sellers/products/${seller.id}/${productId}`,
          {
            selectCategory,
            productName,
            productUnitPrice,
            productWeight,
            productSpec,
            productStock,
            productStatus,
          }
        );
        if (productItem.data.message === 'update product success') {
          alert('แก้ไข สินค้า "สำเร็จ" ');
          await modal.hide();
          fetchProductItem();
        } else {
          alert('แก้ไข สินค้า "ไม่สำเร็จ" ');
        }
      } else {
        alert('แก้ไข รูปภาพสินค้า "ไม่สำเร็จ" ');
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const dataInputAddPhoto = {
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
  };

  const handleOnClickCloseReset = () => {
    setSelectCategory(productItem.categoryName);
    setProductName(productItem.productName);
    setProductUnitPrice(productItem.productUnitprice);
    setProductSpec(`${productSpecInput}`);
    setProductStock(productItem.stockStart);
    setProductWeight(productItem.productWeightPiece);
    setProductStatus(productItem.productStatus);
    setImage1(productItem.image1);
    setImage2(productItem.image2);
    setImage3(productItem.image3);
    setImage4(productItem.image4);
    setImage5(productItem.image5);
    setImage6(productItem.image6);
    setImage7(productItem.image7);
    setImage8(productItem.image8);
    setImage9(productItem.image9);
  };

  const handleOnClickCloseModal = () => {
    modal.hide();
    handleOnClickCloseReset();
  };

  return (
    <>
      <div className="sellerproductadd_container_main">
        <div className="sellerproductadd_container_top">แก้ไข สินค้า</div>
        <Spinner loading={loading} />
        <div className="sellerproductadd_container_middle">
          <div className="sellerproductadd_container_content">
            <div className="sellerproductadd_title">ชื่อสินค้า</div>
            <div className="sellerproductadd_input">
              <input
                type="text"
                maxlength="120"
                value={productName}
                onChange={(event) => setProductName(event.target.value)}
              />
            </div>
          </div>
          <div className="sellerproductadd_container_content">
            <div className="sellerproductadd_title">หมวดหมู่สินค้า</div>
            <div className="sellerproductadd_input">
              <CategoryOption
                category={category}
                selectCategory={selectCategory}
                setSelectCategory={setSelectCategory}
              />
            </div>
          </div>
          <div className="sellerproductadd_container_content">
            <div className="sellerproductadd_title">ราคา</div>
            <div className="sellerproductadd_input_2">
              <input
                type="text"
                maxlength="10"
                value={productUnitPrice}
                onChange={(event) =>
                  setProductUnitPrice(
                    event.target.value.replace(/[^\d]/, '').replace(/^0/, '')
                  )
                }
              />{' '}
              ฿
            </div>
          </div>
          <div className="sellerproductadd_container_content">
            <div className="sellerproductadd_title"> stock</div>
            <div className="sellerproductadd_input_2">
              <input
                type="text"
                maxlength="10"
                value={productStock}
                onChange={(event) =>
                  setProductStock(
                    event.target.value.replace(/[^\d]/, '').replace(/^0/, '')
                  )
                }
              />
              ชิ้น
            </div>
          </div>
          <div className="sellerproductadd_container_content">
            <div className="sellerproductadd_title">น้ำหนัก</div>
            <div className="sellerproductadd_input_2">
              <input
                type="text"
                maxlength="10"
                value={productWeight}
                onChange={(event) =>
                  setProductWeight(
                    event.target.value.replace(/[^\d]/, '').replace(/^0/, '')
                  )
                }
              />{' '}
              กรัม
            </div>
          </div>
          <div className="sellerproductadd_container_content">
            <SellerProductAddPhoto dataInputAddPhoto={dataInputAddPhoto} />
          </div>
          <div className="sellerproductadd_container_content">
            <div className="sellerproductadd_title">รายละเอียดสินค้า</div>
            <div className="sellerproductadd_input">
              <textarea
                rows="10"
                cols="100"
                maxlength="1000"
                value={productSpec}
                onChange={(event) => setProductSpec(event.target.value)}
              />
            </div>
          </div>

          <div className="sellerproductadd_container_content">
            <div className="sellerproductadd_title">สถานะ</div>
            <div className="sellerproductadd_input_2">
              <div className="sellerproductadd_input_2_radio">
                <input
                  type="radio"
                  value="selling"
                  onClick={(event) => setProductStatus(event.target.value)}
                  checked={productStatus === 'selling' ? 'checked' : ''}
                />
                ขายอยู่
              </div>
              <div className="sellerproductadd_input_2_radio">
                <input
                  type="radio"
                  value="not for sale"
                  onClick={(event) => setProductStatus(event.target.value)}
                  checked={productStatus === 'not for sale' ? 'checked' : ''}
                />
                ยังไม่ลงขาย
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sellerproductadd_container_submit">
        <div className="saveandselling">
          <button onClick={() => handleOnClickSubmitUpdate(productStatus)}>
            บันทึก การแก้ไข
          </button>
        </div>

        <button onClick={handleOnClickCloseReset}>รีเซ็ต</button>

        <button onClick={handleOnClickCloseModal}>ยกเลิก การแก้ไข</button>
      </div>
    </>
  );
}

export default SellerProductEditContainer;
