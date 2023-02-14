import React from "react";
import { usePagination, DOTS } from "./usePagination";

const Pagination = (props) => {
  const {
    onPageChange = () => {},
    totalCount = 0,
    siblingCount = 1,
    currentPage = 1,
    pageSize = 10,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange && onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange && onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li key="first-button" className="page-item">
            <button
              onClick={onPrevious}
              className="page-link"
              aria-label="Next"
            >
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </button>
          </li>
          {paginationRange.map((pageNumber, i) => {
            if (pageNumber === DOTS)
              return (
                <li key={DOTS + i} className="pagination-item dots">
                  &#8230;
                </li>
              );
            return (
              <li
                key={pageNumber}
                className={`page-item ${
                  currentPage === pageNumber && ` active`
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => onPageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              </li>
            );
          })}
          <li key="next-button" className="page-item">
            <button
              disabled={currentPage === lastPage}
              className="page-link"
              onClick={onNext}
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
