function PaymentMethod({ setPaymentMethod }) {
  return (
    <div className="payment_method_main">
      <div className="payment_method">วิธีการชำระเงิน :</div>
      <div className="payment_option">
        <select onChange={(event) => setPaymentMethod(event.target.value)}>
          <option>เลือกประเภทการชำระเงิน</option>
          <option>Credit Card</option>
          <option>การโอนเงิน</option>
          <option>ชำระเงินปลายทาง</option>
        </select>
      </div>
    </div>
  );
}

export default PaymentMethod;
