function OrderResultNavBar({ fetchOrderCustomer, navBar }) {
  return (
    <>
      <div
        className={
          navBar === 'ทั้งหมด' ? 'orderresult_navbar2' : 'orderresult_navbar'
        }
      >
        <button type="button" onClick={() => fetchOrderCustomer('ทั้งหมด')}>
          ทั้งหมด
        </button>
      </div>
      <div
        className={
          navBar === 'รอชำระเงิน' || navBar === 'รออนุมัติ'
            ? 'orderresult_navbar2'
            : 'orderresult_navbar'
        }
      >
        <button type="button" onClick={() => fetchOrderCustomer('รอชำระเงิน')}>
          รอชำระเงิน
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
          onClick={() => fetchOrderCustomer('อยู่ระหว่างจัดส่ง')}
        >
          อยู่ระหว่างจัดส่ง
        </button>
      </div>
      <div
        className={
          navBar === 'จัดส่งสำเร็จ'
            ? 'orderresult_navbar2'
            : 'orderresult_navbar'
        }
      >
        <button
          type="button"
          onClick={() => fetchOrderCustomer('จัดส่งสำเร็จ')}
        >
          จัดส่งสำเร็จ
        </button>
      </div>
      <div
        className={
          navBar === 'ยกเลิก' ? 'orderresult_navbar2' : 'orderresult_navbar'
        }
      >
        <button type="button" onClick={() => fetchOrderCustomer('ยกเลิก')}>
          ยกเลิก
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
          onClick={() => fetchOrderCustomer('คืนเงิน/คืนสินค้า')}
        >
          คืนเงิน/คืนสินค้า
        </button>
      </div>
    </>
  );
}

export default OrderResultNavBar;
