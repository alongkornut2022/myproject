import { useEffect, useState } from 'react';
import CarouselBannerItem3 from './CarouselBannerItem3';
import axios from '../../config/axios';
import CarouselIndicators3 from './CarouselIndicators3';

function CarouselBannerContainer3() {
  const [carouselBanner3, setCarouselBanner3] = useState([]);
  const [carouselControl3, setCarouselControl3] = useState(0);

  const handleOnClickNext3 = () => {
    if (carouselControl3 < carouselBanner3.length - 1) {
      setCarouselControl3(carouselControl3 + 1);
    } else {
      setCarouselControl3(0);
    }
  };
  const handleOnClickPrev3 = () => {
    if (carouselControl3 > 0) {
      setCarouselControl3(carouselControl3 - 1);
    } else {
      setCarouselControl3(carouselBanner3.length - 1);
    }
  };

  useEffect(() => {
    const fetchCarouselBanner3 = async () => {
      try {
        const resCarouselBanner3 = await axios.get('/carousel?status=banner3');
        setCarouselBanner3(resCarouselBanner3.data.carouselBanner);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCarouselBanner3();
  }, []);

  return (
    <>
      <div
        id="carouselExampleIndicators3"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="6000"
      >
        <ol class="carousel-indicators">
          {carouselBanner3.map((el, index) => (
            <CarouselIndicators3
              key={el.id}
              idx={index}
              carouselControl3={carouselControl3}
              setCarouselControl3={setCarouselControl3}
            />
          ))}
        </ol>
        <div class="carousel-inner">
          {carouselBanner3.map((el, index) => (
            <CarouselBannerItem3
              key={el.id}
              carouselBanner3={el}
              idx={index}
              carouselControl3={carouselControl3}
            />
          ))}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators3"
          data-bs-slide="prev"
          onClick={handleOnClickPrev3}
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators3"
          data-bs-slide="next"
          onClick={handleOnClickNext3}
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default CarouselBannerContainer3;
