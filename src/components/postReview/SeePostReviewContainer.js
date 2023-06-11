import { useState } from 'react';
import SeePostReviewItem from './SeePostReviewItem';

function SeePostReviewContainer({ orderItem, closeModal2 }) {
  const [trigger, setTrigger] = useState(false);
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
                setTrigger={setTrigger}
                trigger={trigger}
              />
            ))}
      </div>
      <div className="editpostreview_modal_buttom">
        <button onClick={closeModal2}>ตกลง</button>
      </div>
    </div>
  );
}

export default SeePostReviewContainer;
