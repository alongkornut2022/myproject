function CarouselIndicators2({ idx, carouselControl2, setCarouselControl2 }) {
  const handleOnClickSlide2 = () => {
    setCarouselControl2(idx);
  };

  return (
    <>
      <div className="carousel_indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators2"
          data-bs-slide-to={idx}
          class={carouselControl2 === idx ? 'active' : ''}
          aria-current={carouselControl2 === idx ? 'true' : ''}
          aria-label={`Slide ${idx + 1}`}
          onClick={handleOnClickSlide2}
        ></button>
      </div>
    </>
  );
}

export default CarouselIndicators2;
