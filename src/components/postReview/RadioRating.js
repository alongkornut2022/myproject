function RadioRating({ rating, setRating, quelity }) {
  return (
    <>
      <div className="postreview_modal_item_quelity_title">คุณภาพสินค้า</div>
      <div className="postreview_modal_item_quelity_rating">
        <input
          type="radio"
          value="1"
          onClick={(event) => setRating(event.target.value)}
          checked={rating == 1 ? 'checked' : ''}
        />

        <input
          type="radio"
          value="2"
          onClick={(event) => setRating(event.target.value)}
          checked={rating == 2 ? 'checked' : ''}
        />

        <input
          type="radio"
          value="3"
          onClick={(event) => setRating(event.target.value)}
          checked={rating == 3 ? 'checked' : ''}
        />

        <input
          type="radio"
          value="4"
          onClick={(event) => setRating(event.target.value)}
          checked={rating == 4 ? 'checked' : ''}
        />

        <input
          type="radio"
          value="5"
          onClick={(event) => setRating(event.target.value)}
          checked={rating == 5 ? 'checked' : ''}
        />
      </div>
      <div className="postreview_modal_item_quelity_score">{quelity}</div>
    </>
  );
}

export default RadioRating;
