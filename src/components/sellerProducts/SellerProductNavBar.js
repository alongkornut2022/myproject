function SellerProductNavBar({ fetchProductSeller, navBar, productSeller }) {
  return (
    <>
      <div
        className={
          navBar === 'ทั้งหมด' ? 'orderresult_navbar2' : 'orderresult_navbar'
        }
      >
        <button type="button" onClick={() => fetchProductSeller('ทั้งหมด')}>
          ทั้งหมด {navBar === 'ทั้งหมด' ? '(' + productSeller.length + ')' : ''}
        </button>
      </div>
      <div
        className={
          navBar === 'selling' ? 'orderresult_navbar2' : 'orderresult_navbar'
        }
      >
        <button type="button" onClick={() => fetchProductSeller('selling')}>
          ขายอยู่ {navBar === 'selling' ? '(' + productSeller.length + ')' : ''}
        </button>
      </div>
      <div
        className={
          navBar === 'sold out' ? 'orderresult_navbar2' : 'orderresult_navbar'
        }
      >
        <button type="button" onClick={() => fetchProductSeller('sold out')}>
          ขายหมด {navBar === 'sold out' ? '(' + productSeller.length + ')' : ''}
        </button>
      </div>
      <div
        className={
          navBar === 'suspended' ? 'orderresult_navbar2' : 'orderresult_navbar'
        }
      >
        <button type="button" onClick={() => fetchProductSeller('suspended')}>
          ถูกระงับ{' '}
          {navBar === 'suspended' ? '(' + productSeller.length + ')' : ''}
        </button>
      </div>
      <div
        className={
          navBar === 'not for sale'
            ? 'orderresult_navbar2'
            : 'orderresult_navbar'
        }
      >
        <button
          type="button"
          onClick={() => fetchProductSeller('not for sale')}
        >
          ยังไม่ลงขาย{' '}
          {navBar === 'not for sale' ? '(' + productSeller.length + ')' : ''}
        </button>
      </div>
    </>
  );
}

export default SellerProductNavBar;
