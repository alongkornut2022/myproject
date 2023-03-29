import { Toast } from 'bootstrap';
import { useContext, useEffect, useRef } from 'react';
import { ErrorContext } from './contexts/ErrorContext';
import Router from './route/Router';

function App() {
  const { error, setError } = useContext(ErrorContext);
  const toastEl = useRef();

  useEffect(() => {
    if (error) {
      const toast = new Toast(toastEl.current);
      toast.show();
      setTimeout(() => setError(null), 6000);
    }
  }, [error]);

  return (
    <>
      <div class="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
        <div
          id="liveToast"
          class="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          ref={toastEl}
        >
          <div class="toast-header">
            <strong class="me-auto">Error Message</strong>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div class="toast-body">{error}</div>
        </div>
      </div>

      <Router />
    </>
  );
}

export default App;
