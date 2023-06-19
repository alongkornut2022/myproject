import { Link } from 'react-router-dom';

function CarouselBannerItem2({ carouselBanner2, idx, carouselControl2 }) {
  const { productId, image1, discounts } = carouselBanner2;

  return (
    <>
      <Link end to={`ProductDetail/${productId}`}>
        <div className="carousel_item_img">
          <div
            class={
              carouselControl2 === idx
                ? 'carousel-item active'
                : 'carousel-item'
            }
          >
            <div
              className="productitem_card_discounts"
              hidden={discounts === null ? 'hidden' : ''}
            >
              <div className="productitem_card_discounts_item1">ลด</div>
              <div className="productitem_card_discounts_item2">
                {discounts}%
              </div>
            </div>
            <img
              src={image1}
              class="d-block w-100"
              height="320px"
              alt="First slide"
            />
          </div>
        </div>
        <div class="carousel-caption d-none d-md-block">
          <h5>หนังสือแนะนำ / หนังสือหายาก</h5>
        </div>
      </Link>
    </>
  );
}

export default CarouselBannerItem2;
