import { useContext, useState } from 'react';
import axios from '../../config/axiosSeller';

function ProductComment({ productRating, sellerIds, setTrigerRating }) {
  const { productRatingId, sellerId, rating, postReview, comment, commentId } =
    productRating;

  const [commentWrite, setCommentWrite] = useState(comment);
  const [editComment, setEditComment] = useState(false);

  const handleOnClickWriteComment = async () => {
    try {
      const commentItem = await axios.post(
        `/sellers/comment/${sellerIds}/${productRatingId}`,
        {
          commentWrite,
        }
      );
      alert(commentItem.data.message);
      setTrigerRating(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnClickEditComment = async () => {
    try {
      const commentItem = await axios.patch(
        `/sellers/comment/${sellerIds}/${commentId}`,
        {
          commentWrite,
        }
      );
      alert(commentItem.data.message);
      setTrigerRating(true);
      setEditComment(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnClickDelelteComment = async () => {
    try {
      const commentItem = await axios.delete(
        `/sellers/comment/${sellerIds}/${commentId}`
      );
      alert(commentItem.data.message);
      setTrigerRating(true);
      setEditComment(false);
      setCommentWrite('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        className="review_right_comment_item"
        hidden={rating ? '' : 'hidden'}
      >
        การตอบกลับจากผู้ขาย
      </div>
      <div
        className="review_right_comment_item"
        hidden={comment ? (editComment === false ? '' : 'hidden') : 'hidden'}
      >
        {comment}
      </div>

      <div
        className="review_right_comment_item"
        hidden={
          sellerIds === sellerId
            ? comment
              ? editComment === false
                ? 'hidden'
                : ''
              : ''
            : 'hidden'
        }
      >
        <input
          type="text"
          value={commentWrite}
          onChange={(event) => setCommentWrite(event.target.value)}
        />
      </div>

      <div className="review_right_comment_item2">
        <button
          onClick={handleOnClickWriteComment}
          hidden={sellerIds === sellerId ? (comment ? 'hidden' : '') : 'hidden'}
        >
          เขียน
        </button>
        <button
          onClick={handleOnClickEditComment}
          hidden={
            sellerIds === sellerId
              ? comment
                ? editComment === false
                  ? 'hidden'
                  : ''
                : 'hidden'
              : 'hidden'
          }
        >
          บันทึก การแก้ไข
        </button>
        <button
          onClick={() => setEditComment(true)}
          hidden={
            sellerIds === sellerId && comment && editComment === false
              ? ''
              : 'hidden'
          }
        >
          แก้ไข
        </button>
        <button
          onClick={() => {
            setEditComment(false);
            setCommentWrite(comment);
          }}
          hidden={
            sellerIds === sellerId
              ? comment
                ? editComment === false
                  ? 'hidden'
                  : ''
                : 'hidden'
              : 'hidden'
          }
        >
          ยกเลิก การแก้ไข
        </button>
        <button
          onClick={handleOnClickDelelteComment}
          hidden={
            sellerIds === sellerId
              ? comment
                ? editComment === false
                  ? ''
                  : 'hidden'
                : 'hidden'
              : 'hidden'
          }
        >
          ลบ
        </button>
      </div>
    </>
  );
}

export default ProductComment;
