import PostReviewItem from './PostReviewItem';

function PostReviewContainer({ inputPostReviewContainer }) {
  const { orderItem, closeModal, customerId, setProductRating } =
    inputPostReviewContainer;
  return (
    <div className="postreview_container">
      <div className="postreview_modal_item">
        {orderItem.map((el) => (
          <PostReviewItem
            key={el.id}
            orderItem={el}
            customerId={customerId}
            closeModal={closeModal}
            setProductRating={setProductRating}
          />
        ))}
      </div>
      {/* <div className="postreview_modal_buttom">
        <button>ยืนยัน</button>
      </div> */}
    </div>
  );
}

export default PostReviewContainer;
