function SellerOrderNavBar({ fetchOrderSeller, navBar, orderSeller }) {
  return (
    <>
      <div
        className={
          navBar === 'ทั้งหมด' ? 'orderresult_navbar2' : 'orderresult_navbar'
        }
      >
        <button type="button" onClick={() => fetchOrderSeller('ทั้งหมด')}>
          ทั้งหมด {navBar === 'ทั้งหมด' ? '(' + orderSeller.length + ')' : ''}
        </button>
      </div>
      <div
        className={
          navBar === 'รอชำระเงิน' || navBar === 'รออนุมัติ'
            ? 'orderresult_navbar2'
            : 'orderresult_navbar'
        }
      >
        <button type="button" onClick={() => fetchOrderSeller('รอชำระเงิน')}>
          รอชำระเงิน{' '}
          {navBar === 'รอชำระเงิน' || navBar === 'รออนุมัติ'
            ? '(' + orderSeller.length + ')'
            : ''}
        </button>
      </div>
      <div
        className={
          navBar === 'ชำระเงินแล้ว' || navBar === 'อนุมัติแล้ว'
            ? 'orderresult_navbar2'
            : 'orderresult_navbar'
        }
      >
        <button type="button" onClick={() => fetchOrderSeller('ชำระเงินแล้ว')}>
          ที่ต้องจัดส่ง{' '}
          {navBar === 'ชำระเงินแล้ว' || navBar === 'อนุมัติแล้ว'
            ? '(' + orderSeller.length + ')'
            : ''}
        </button>
      </div>
      <div
        className={
          navBar === 'อยู่ระหว่างจัดส่ง'
            ? 'orderresult_navbar2'
            : 'orderresult_navbar'
        }
      >
        <button
          type="button"
          onClick={() => fetchOrderSeller('อยู่ระหว่างจัดส่ง')}
        >
          อยู่ระหว่างจัดส่ง{' '}
          {navBar === 'อยู่ระหว่างจัดส่ง' ? '(' + orderSeller.length + ')' : ''}
        </button>
      </div>
      <div
        className={
          navBar === 'จัดส่งสำเร็จ'
            ? 'orderresult_navbar2'
            : 'orderresult_navbar'
        }
      >
        <button type="button" onClick={() => fetchOrderSeller('จัดส่งสำเร็จ')}>
          จัดส่งสำเร็จ{' '}
          {navBar === 'จัดส่งสำเร็จ' ? '(' + orderSeller.length + ')' : ''}
        </button>
      </div>
      <div
        className={
          navBar === 'ยกเลิก' ? 'orderresult_navbar2' : 'orderresult_navbar'
        }
      >
        <button type="button" onClick={() => fetchOrderSeller('ยกเลิก')}>
          ยกเลิก {navBar === 'ยกเลิก' ? '(' + orderSeller.length + ')' : ''}
        </button>
      </div>
      <div
        className={
          navBar === 'คืนเงิน/คืนสินค้า'
            ? 'orderresult_navbar2'
            : 'orderresult_navbar'
        }
      >
        <button
          type="button"
          onClick={() => fetchOrderSeller('คืนเงิน/คืนสินค้า')}
        >
          คืนเงิน/คืนสินค้า{' '}
          {navBar === 'คืนเงิน/คืนสินค้า' ? '(' + orderSeller.length + ')' : ''}
        </button>
      </div>
    </>
  );
}

export default SellerOrderNavBar;
