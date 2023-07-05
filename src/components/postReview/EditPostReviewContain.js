import EditPostReviewItem from './EditPostReviewItem';

function EditPostReviewContain({
  orderDetailId,
  customerId,
  productId,
  productName,
  imageProduct,
  username,
  productRating,
  productRatingId,
  currentRating,
  currentPostReview,
  currentImageReview1,
  currentImageReview2,
  currentImageReview3,
  currentImageReview4,
  postImagesId,
  displayUsername,
  triggerRating,
  setTriggerRating,
}) {
  return (
    <>
      <EditPostReviewItem
        orderDetailId={orderDetailId}
        customerId={customerId}
        productId={productId}
        productName={productName}
        imageProduct={imageProduct}
        username={username}
        productRating={productRating}
        productRatingId={productRatingId}
        currentRating={currentRating}
        currentPostReview={currentPostReview}
        currentImageReview1={currentImageReview1}
        currentImageReview2={currentImageReview2}
        currentImageReview3={currentImageReview3}
        currentImageReview4={currentImageReview4}
        postImagesId={postImagesId}
        displayUsername={displayUsername}
        triggerRating={triggerRating}
        setTriggerRating={setTriggerRating}
      />
    </>
  );
}

export default EditPostReviewContain;
