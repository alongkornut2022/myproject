function CarouselIndicators({ idx, carouselControl, setCarouselControl }) {
  const handleOnClickSlide = () => {
    setCarouselControl(idx);
  };

  return (
    <>
      <div className="carousel_indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={idx}
          class={carouselControl === idx ? 'active' : ''}
          aria-current={carouselControl === idx ? 'true' : ''}
          aria-label={`Slide ${idx + 1}`}
          onClick={handleOnClickSlide}
        ></button>
      </div>
    </>
  );
}

export default CarouselIndicators;
