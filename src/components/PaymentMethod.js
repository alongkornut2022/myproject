import React from 'react';

function PaymentMethod() {
  return (
    <from>
      <div className="payment_method_main">
        <div className="payment_method_left">
          <input type="radio" name="payment method" value="Credit Card" />
          <input type="radio" name="payment method" value="Internet Banking" />
          <input type="radio" name="payment method" value="Mobile Banking" />
          <input type="radio" name="payment method" value="Online Banking" />
          <input type="radio" name="payment method" value="cash on delivery" />
        </div>

        <div className="payment_method_right">
          <label>Credit Card</label>
          <label>Internet Banking</label>
          <label>Mobile Banking</label>
          <label>Online Banking</label>
          <label>ชำระเงินปลายทาง</label>
        </div>
      </div>
    </from>
  );
}

export default PaymentMethod;
