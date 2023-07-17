import PostReviewItem from './PostReviewItem';

function PostReviewContainer({ inputPostReviewContainer }) {
  const { orderItem, closeModal, setTriggerOrderRating } =
    inputPostReviewContainer;
  return (
    <div className="postreview_container">
      <div className="postreview_modal_item">
        {orderItem.map((el) => (
          <PostReviewItem
            key={el.id}
            orderItem={el}
            closeModal={closeModal}
            setTriggerOrderRating={setTriggerOrderRating}
          />
        ))}
      </div>
    </div>
  );
}

export default PostReviewContainer;
