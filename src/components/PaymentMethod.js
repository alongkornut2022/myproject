import React from 'react';

function PaymentMethod() {
  return (
    <div className="payment_method_main">
      <div className="payment_method">วิธีการชำระเงิน :</div>
      <div className="payment_option">
        <select>
          <option>Credit Card</option>
          <option>Mobile Banking</option>
          <option>ชำระเงินปลายทาง</option>
        </select>
      </div>
    </div>
  );
}

export default PaymentMethod;
