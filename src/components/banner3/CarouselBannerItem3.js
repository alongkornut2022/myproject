import { Link } from 'react-router-dom';

function CarouselBannerItem3({ carouselBanner3, idx, carouselControl3 }) {
  const { carousel } = carouselBanner3;

  return (
    <>
      <Link end to="">
        <div className="carousel_item_img">
          <div
            class={
              carouselControl3 === idx
                ? 'carousel-item active'
                : 'carousel-item'
            }
          >
            <img
              src={carousel}
              class="d-block w-100"
              height="320px"
              alt="First slide"
            />
          </div>
        </div>
        <div class="carousel-caption d-none d-md-block">
          <h5>สำรองโฆษณา</h5>
        </div>
      </Link>
    </>
  );
}

export default CarouselBannerItem3;
