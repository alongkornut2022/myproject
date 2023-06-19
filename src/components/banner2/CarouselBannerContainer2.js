import { useEffect, useState } from 'react';
import CarouselBannerItem2 from './CarouselBannerItem2';
import axios from '../../config/axios';
import CarouselIndicators2 from './CarouselIndicators2';

function CarouselBannerContainer2() {
  const [carouselBanner2, setCarouselBanner2] = useState([]);
  const [carouselControl2, setCarouselControl2] = useState(0);

  const handleOnClickNext2 = () => {
    if (carouselControl2 < carouselBanner2.length - 1) {
      setCarouselControl2(carouselControl2 + 1);
    } else {
      setCarouselControl2(0);
    }
  };
  const handleOnClickPrev2 = () => {
    if (carouselControl2 > 0) {
      setCarouselControl2(carouselControl2 - 1);
    } else {
      setCarouselControl2(carouselBanner2.length - 1);
    }
  };

  useEffect(() => {
    const fetchCarouselBanner2 = async () => {
      try {
        const resCarouselBanner2 = await axios.get(
          '/carousel/product?status=banner2'
        );
        setCarouselBanner2(resCarouselBanner2.data.carouselBanner);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCarouselBanner2();
  }, []);

  return (
    <>
      <div
        id="carouselExampleIndicators2"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <ol class="carousel-indicators">
          {carouselBanner2.map((el, index) => (
            <CarouselIndicators2
              key={el.id}
              idx={index}
              carouselControl2={carouselControl2}
              setCarouselControl2={setCarouselControl2}
            />
          ))}
        </ol>
        <div class="carousel-inner">
          {carouselBanner2.map((el, index) => (
            <CarouselBannerItem2
              key={el.id}
              carouselBanner2={el}
              idx={index}
              carouselControl2={carouselControl2}
            />
          ))}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators2"
          data-bs-slide="prev"
          onClick={handleOnClickPrev2}
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators2"
          data-bs-slide="next"
          onClick={handleOnClickNext2}
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default CarouselBannerContainer2;
