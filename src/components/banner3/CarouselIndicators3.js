function CarouselIndicators3({ idx, carouselControl3, setCarouselControl3 }) {
  const handleOnClickSlide3 = () => {
    setCarouselControl3(idx);
  };

  return (
    <>
      <div className="carousel_indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators3"
          data-bs-slide-to={idx}
          class={carouselControl3 === idx ? 'active' : ''}
          aria-current={carouselControl3 === idx ? 'true' : ''}
          aria-label={`Slide ${idx + 1}`}
          onClick={handleOnClickSlide3}
        ></button>
      </div>
    </>
  );
}

export default CarouselIndicators3;
