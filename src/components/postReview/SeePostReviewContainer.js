import SeePostReviewItem from './SeePostReviewItem';

function SeePostReviewContainer({
  orderItem,
  closeModal2,
  triggerOrderRating,
  setTriggerOrderRating,
  triggerProductRating,
  setTriggerProductRating,
}) {
  return (
    <div className="editpostreview_container">
      <div className="editpostreview_modal_item">
        {orderItem == null
          ? ''
          : orderItem.map((el) => (
              <SeePostReviewItem
                key={el.id}
                orderItem={el}
                closeModal2={closeModal2}
                triggerOrderRating={triggerOrderRating}
                setTriggerOrderRating={setTriggerOrderRating}
                triggerProductRating={triggerProductRating}
                setTriggerProductRating={setTriggerProductRating}
              />
            ))}
      </div>
      <div className="editpostreview_modal_buttom">
        <button onClick={closeModal2}>ปิด</button>
      </div>
    </div>
  );
}

export default SeePostReviewContainer;
