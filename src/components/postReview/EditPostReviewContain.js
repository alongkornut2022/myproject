import EditPostReviewItem from './EditPostReviewItem';

function EditPostReviewContain({
  orderDetailId,
  customerId,
  productId,
  productName,
  imageProduct,
  username,
  productRating,
  currentRating,
  currentPostReview,
  currentImages,
  displayUsername,
  setTrigger,
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
        currentRating={currentRating}
        currentPostReview={currentPostReview}
        currentImages={currentImages}
        displayUsername={displayUsername}
        setTrigger={setTrigger}
      />
    </>
  );
}

export default EditPostReviewContain;
