import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductDetailReviewItem from '../components/ProductDetailReviewItem';

function ProductDetail() {
  return (
    <div className="productdetail_main_content">
      <div className="productdetail_main_content_top">
        <div className="productitem_image">
          <div className="productitem_image_main">
            <img src="https://picsum.photos/420" />
          </div>
          <div className="productitem_image_overview">
            <div className="product_image_item1">
              <img src="https://picsum.photos/80" />
            </div>
            <div className="product_image_item2">
              <img src="https://picsum.photos/80" />
            </div>
            <div className="product_image_item3">
              <img src="https://picsum.photos/80" />
            </div>
            <div className="product_image_item4">
              <img src="https://picsum.photos/80" />
            </div>
            <div className="product_image_item5">
              <img src="https://picsum.photos/80" />
            </div>
          </div>
        </div>
        <div className="productitem_title">
          <div className="productitem_productname">ชื่อสินค้า</div>
          <div className="productitem_rating">คะแนนสินค้า</div>
          <div className="productitem_price_alreadySold">
            <div className="item1">ราคา</div>
            <div className="item2">ขายแล้ว..... ชิ้น</div>
          </div>
          <div className="productitem_numberofpieces">
            <div className="item1">จำนวน</div>
            <div className="item2">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <div className="item3">มีสินค้าทั้งหมด ..... ชิ้น</div>
          </div>
          <div className="productitem_addtocart">
            <div className="addtocart_item1">
              <NavLink end to="/OrderTotal">
                <button>ซื้อเลย</button>
              </NavLink>
            </div>
            <div className="addtocart_item2">
              <NavLink end to="/AddToCart">
                <button>เพิ่มไปยังรถเข็น</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="productdetail_detail">
        <div>
          <h3>รายละเอียดสินค้า</h3>
        </div>
        <div>เนื้อหา</div>
      </div>

      <div className="productdetail_rating">
        <h3>คะแนนของสินค้า</h3>
        <div className="rating_main">
          <div className="rating_left"></div>
          <div className="rating_right"></div>
        </div>
      </div>

      <div className="productdetail_review">
        <h3>รีวิวสินค้า</h3>
        <ProductDetailReviewItem />
        <ProductDetailReviewItem />
        <ProductDetailReviewItem />
      </div>
    </div>
  );
}

export default ProductDetail;
