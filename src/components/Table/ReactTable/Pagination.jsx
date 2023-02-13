import React, { useEffect } from "react";
// import { usePagination, DOTS } from "hooks/usePagination";
import Select from "react-select";
// import { imsLogger } from "services/loggerService";
import { Col, Row } from "reactstrap";

const Pagination = (props) => {
  const {
    onPageChange = () => {},
    onSizeChange = () => {},
    totalCount = 0,
    siblingCount = 1,
    currentPage = 1,
    pageSize = 0,
    className,
  } = props;

  const isLastPage = currentPage === Math.ceil(totalCount / pageSize);
  const [page, setPage] = React.useState(currentPage);
  const [size, setSize] = React.useState(pageSize);

  useEffect(() => {
    onSizeChange(currentPage, size);
  }, [size, currentPage]);

  // const paginationRange = usePagination({
  //   currentPage,
  //   totalCount,
  //   siblingCount,
  //   pageSize,
  // });

  const goToPage = (pageNo) => {
    onPageChange(pageNo, size);
  };

  // if (currentPage === 0 || paginationRange.length < 1) {
  //   return null;
  // }

  const onNext = () => {
    onPageChange && onPageChange(currentPage + 1, size);
  };

  const onPrevious = () => {
    onPageChange && onPageChange(currentPage - 1, size);
  };

  // let lastPage = paginationRange[paginationRange.length - 1];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: "30px",
      height: "30px",
    }),
    input: (provided, state) => ({
      ...provided,
      margin: "0px",
    }),
  };

  return (
    <>
      <nav aria-label="Page navigation">
        <Row className="pagination d-flex justify-content-center  align-items-center mb-0">
          <Col
            md="8"
            lg="4"
            className="d-flex align-items-center justify-content-lg-end justify-content-center px-0"
          >
            <p>Rows per page:</p>

            <Select
              styles={customStyles}
              className="w-25 react-select-small  default ml-4"
              classNamePrefix="react-select"
              name="singleSelect"
              onChange={(selectedOption) => {
                setSize(selectedOption.value);
              }}
              defaultValue={{ value: 10, label: "10" }}
              // value={{ value: pageSize, label: pageSize }}
              options={[
                { value: 10, label: "10" },
                { value: 20, label: "20" },
                { value: 30, label: "30" },
              ]}
            />
          </Col>

          <Col md="6" lg="2" className="my-lg-0 my-3 px-0">
            <span className="mb-0">
              {/* Show dynamically how many entries of which page are showing from total entries */}
              {/* Check if the page is last page also */}
              {currentPage * pageSize - pageSize + 1} -{" "}
              {!isLastPage ? currentPage * pageSize : totalCount} of{" "}
              {totalCount}
            </span>
          </Col>

          <Col
            md="7"
            lg="2"
            className="d-flex align-items-center my-lg-0 my-3  justify-content-center px-0"
          >
            <li key="first-button" className="page-item ml-4 mr-1 mb-1">
              <button
                onClick={onPrevious}
                className="page-link pagination-btn d-flex justify-content-center align-items-center"
                aria-label="Next"
              >
                {/* <span aria-hidden="true">&laquo;</span> */}
                <i className=" fa-solid fa-chevron-left pagination-icon"></i>
                {/* <i className="fa-solid fa-angle-left"></i> */}
                <span className="sr-only">Previous</span>
              </button>
            </li>
            <li className="mb-1 border current-page rounded">{currentPage}</li>
            <li key="next-button" className="page-item ml-1 mr-5 mb-1 ">
              <button
                // disabled={currentPage === lastPage}
                className="page-link pagination-btn d-flex justify-content-center align-items-center"
                onClick={onNext}
                aria-label="Next"
              >
                {/* <span aria-hidden="true">&raquo;</span> */}
                <i className=" fa-solid fa-chevron-right pagination-icon"></i>
                {/* <i className="fa-solid fa-angle-right"></i> */}
                <span className="sr-only">Next</span>
              </button>
            </li>
          </Col>
          <Col
            md="6"
            lg="4"
            className="d-flex align-items-center justify-content-lg-start justify-content-center px-0"
          >
            <li>Go to page</li>
            <li className="mx-0  ">
              <input
                value={page}
                onChange={(e) => {
                  setPage(e.target.value);
                }}
                type="number"
                className="number-input text-center mx-3 border"
              />
            </li>
            <li>
              <button
                // disabled={
                //   page <= 0 || page > lastPage || Number(page) === currentPage
                // }
                onClick={() => goToPage(page)}
                className="btn btn-primary btn-sm"
              >
                Go
              </button>
            </li>
          </Col>
        </Row>
      </nav>
    </>
  );
};

export default Pagination;
