import { useEffect, useState } from 'react';
import CarouselBannerItem from './CarouselBannerItem';
import axios from '../../config/axios';
import CarouselIndicators from './CarouselIndicators';

function CarouselBannerContainer() {
  const [carouselBanner, setCarouselBanner] = useState([]);
  const [carouselControl, setCarouselControl] = useState(0);

  const handleOnClickNext = () => {
    if (carouselControl < carouselBanner.length - 1) {
      setCarouselControl(carouselControl + 1);
    } else {
      setCarouselControl(0);
    }
  };
  const handleOnClickPrev = () => {
    if (carouselControl > 0) {
      setCarouselControl(carouselControl - 1);
    } else {
      setCarouselControl(carouselBanner.length - 1);
    }
  };

  useEffect(() => {
    const fetchCarouselBanner = async () => {
      try {
        const resCarouselBanner = await axios.get(
          '/carousel/product?status=banner1'
        );
        setCarouselBanner(resCarouselBanner.data.carouselBanner);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCarouselBanner();
  }, []);

  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <ol class="carousel-indicators">
          {carouselBanner.map((el, index) => (
            <CarouselIndicators
              key={el.id}
              idx={index}
              carouselControl={carouselControl}
              setCarouselControl={setCarouselControl}
            />
          ))}
        </ol>
        <div class="carousel-inner">
          {carouselBanner.map((el, index) => (
            <CarouselBannerItem
              key={el.id}
              carouselBanner={el}
              idx={index}
              carouselControl={carouselControl}
            />
          ))}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          onClick={handleOnClickPrev}
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          onClick={handleOnClickNext}
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default CarouselBannerContainer;
