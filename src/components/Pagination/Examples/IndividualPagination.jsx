import React from "react";
import Pagination from "../PaginationBase";
import PaginationItem from "../PaginationItemBase";
import PaginationLink from "../PaginationLinkBase";

const IndividualPagination = ({}) => {
  return (
    <Pagination separated>
      <PaginationItem>
        <PaginationLink first href="#"></PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="#">
          <span aria-hidden="true" className="visually-hidden">
            {"<"}
          </span>
          <span class="">Prev</span>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#">
          <span aria-hidden="true" className="visually-hidden">
            {">"}
          </span>
          <span class="">Next</span>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" last />
      </PaginationItem>
    </Pagination>
  );
};

export default IndividualPagination;
