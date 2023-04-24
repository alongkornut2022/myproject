function Pagination2() {
  const paginationNumbers = document.getElementById('pagination-numbers');
  const paginatedList = document.getElementById('paginated-list');
  const listItems = paginatedList.querySelectorAll('li');
  const nextButton = document.getElementById('next-button');
  const prevButton = document.getElementById('prev-button');

  const paginationLimit = 10;
  const pageCount = Math.ceil(listItems.length / paginationLimit);
  let currentPage = 1;

  // Disable Page Navigation Buttons
  const disableButton = (button) => {
    button.classList.add('disabled');
    button.setAttribute('disabled', true);
  };

  const enableButton = (button) => {
    button.classList.remove('disabled');
    button.removeAttribute('disabled');
  };

  const handlePageButtonsStatus = () => {
    if (currentPage === 1) {
      disableButton(prevButton);
    } else {
      enableButton(prevButton);
    }

    if (pageCount === currentPage) {
      disableButton(nextButton);
    } else {
      enableButton(nextButton);
    }
  };

  // Set Active Page Number

  const handleActivePageNumber = () => {
    document.querySelectorAll('.pagination-number').forEach((button) => {
      button.classList.remove('active');

      const pageIndex = Number(button.getAttribute('page-index'));
      if (pageIndex == currentPage) {
        button.classList.add('active');
      }
    });
  };

  // Add Page Numbers

  const appendPageNumber = (index) => {
    const pageNumber = document.createElement('button');
    pageNumber.className = 'pagination-number';
    pageNumber.innerHTML = index;
    pageNumber.setAttribute('page-index', index);
    pageNumber.setAttribute('aria-label', 'Page ' + index);

    paginationNumbers.appendChild(pageNumber);
  };

  const getPaginationNumbers = () => {
    for (let i = 1; i <= pageCount; i++) {
      appendPageNumber(i);
    }
  };

  // Display Active Page

  const setCurrentPage = (pageNum) => {
    currentPage = pageNum;

    handleActivePageNumber();
    handlePageButtonsStatus();

    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;

    listItems.forEach((item, index) => {
      item.classList.add('hidden');
      if (index >= prevRange && index < currRange) {
        item.classList.remove('hidden');
      }
    });
  };

  // Add Page Number Buttons Event Listener

  // Next and Previous Buttons

  window.addEventListener('load', () => {
    getPaginationNumbers();
    setCurrentPage(1);

    prevButton.addEventListener('click', () => {
      setCurrentPage(currentPage - 1);
    });

    nextButton.addEventListener('click', () => {
      setCurrentPage(currentPage + 1);
    });

    document.querySelectorAll('.pagination-number').forEach((button) => {
      const pageIndex = Number(button.getAttribute('page-index'));

      if (pageIndex) {
        button.addEventListener('click', () => {
          setCurrentPage(pageIndex);
        });
      }
    });
  });

  return;
  <>
    <ul id="paginated-list" data-current-page="1" aria-live="polite">
      <li>Item 1</li>
    </ul>

    <nav class="pagination-container">
      <button
        class="pagination-button"
        id="prev-button"
        aria-label="Previous page"
        title="Previous page"
      >
        &lt;
      </button>

      <div id="pagination-numbers"></div>

      <button
        class="pagination-button"
        id="next-button"
        aria-label="Next page"
        title="Next page"
      >
        &gt;
      </button>
    </nav>
  </>;
}

export default Pagination2;
