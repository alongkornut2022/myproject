function Spinner({ loading }) {
  return (
    <div className="spinner_loading">
      {loading === true ? (
        <div class="d-flex justify-content-center">
          <div
            class="spinner-border"
            style={{ width: '2.5rem', height: '2.5rem' }}
            role="status"
          >
            <span class="sr-only"></span>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Spinner;
