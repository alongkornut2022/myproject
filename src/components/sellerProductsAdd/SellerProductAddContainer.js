import { useContext, useEffect, useState } from 'react';
import { ErrorContext } from '../../contexts/ErrorContext';
import axios from '../../config/axiosSeller';
import CategoryOption from '../category/CategoryOption';
import SellerProductAddPhoto from './SellerProductAddPhoto';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner';

function SellerProductAddContainer({ seller }) {
  const { setError } = useContext(ErrorContext);

  const [productItem, setProductItem] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState('หมวดหมู่ทั้งหมด');

  const [productName, setProductName] = useState('');
  const [productSpec, setProductSpec] = useState('');
  const [productUnitPrice, setProductUnitPrice] = useState('');
  const [productStock, setProductStock] = useState('');
  const [productWeight, setProductWeight] = useState('');
  const [productStatus, setProductStatus] = useState('selling');

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [image6, setImage6] = useState(null);
  const [image7, setImage7] = useState(null);
  const [image8, setImage8] = useState(null);
  const [image9, setImage9] = useState(null);

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

  const handleOnClickSubmit = async () => {
    try {
      setLoading(true);

      if (
        image1 === null ||
        selectCategory === 'หมวดหมู่ทั้งหมด' ||
        productStatus === ''
      ) {
        alert(
          'คุณกรอกข้อมูลสินค้า ยังไม่ครบ เช่น รูปภาพ, หมวดหมู่สินค้า, สถานะ เป็นต้น'
        );
      } else {
        const formData = new FormData();
        if (image1) {
          formData.append('productImages', image1);
        }
        if (image2) {
          formData.append('productImages', image2);
        }
        if (image3) {
          formData.append('productImages', image3);
        }
        if (image4) {
          formData.append('productImages', image4);
        }
        if (image5) {
          formData.append('productImages', image5);
        }
        if (image6) {
          formData.append('productImages', image6);
        }
        if (image7) {
          formData.append('productImages', image7);
        }
        if (image8) {
          formData.append('productImages', image8);
        }
        if (image9) {
          formData.append('productImages', image9);
        }
        const productImages = await axios.post(
          `sellers/products/images/${seller.id}`,
          formData
        );

        if (productImages.data.productImages.id) {
          const addProductItem = await axios.post(
            `sellers/products/${seller.id}`,
            {
              selectCategory,
              productName,
              productUnitPrice,
              productWeight,
              productSpec,
              productStock,
              productImagesId: productImages.data.productImages.id,
              productStatus,
            }
          );

          if (!addProductItem) {
            const deleteProductImages = await axios.delete(
              `sellers/products/images/delbyid/${seller.id}/${productImages.data.productImages.id}`
            );
            alert('เพิ่มสินค้า "ไม่สำเร็จ" ');
          } else {
            setProductItem(addProductItem.data.productItem);
            alert('เพิ่มสินค้า "สำเร็จ" ');
            handleOnClickReset();
          }
        } else {
          alert('เพิ่มสินค้า  product images "ไม่สำเร็จ" ');
        }
      }
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOnClickReset = () => {
    setProductName('');
    setProductSpec('');
    setProductUnitPrice('');
    setProductStock('');
    setProductWeight('');
    setImage1(null);
    setImage2(null);
    setImage3(null);
    setImage4(null);
    setImage5(null);
    setImage6(null);
    setImage7(null);
    setImage8(null);
    setImage9(null);
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

  return (
    <>
      <form onSubmit={handleOnClickSubmit} onReset={handleOnClickReset}>
        <div className="sellerproductadd_container_main">
          <div className="sellerproductadd_container_top">เพิ่มสินค้าใหม่</div>
          <Spinner loading={loading} />
          <div className="sellerproductadd_container_middle">
            <div className="sellerproductadd_container_content">
              <div className="sellerproductadd_title">ชื่อสินค้า</div>
              <div className="sellerproductadd_input">
                <input
                  type="text"
                  maxlength="200"
                  placeholder="(ไม่เกิน 200 ตัว)"
                  value={productName}
                  onChange={(event) => setProductName(event.target.value)}
                  required=" required"
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
                  required=" required"
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
                  required=" required"
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
                  required=" required"
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
                  required=" required"
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
                  ลงขาย
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
            <button type="submit">บันทึก</button>
          </div>

          <button type="reset">Reset</button>
        </div>
      </form>
    </>
  );
}

export default SellerProductAddContainer;
