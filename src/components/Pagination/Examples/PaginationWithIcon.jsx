import React from "react";
import Pagination from "../PaginationBase";
import PaginationItem from "../PaginationItemBase";
import PaginationLink from "../PaginationLinkBase";

const SeparatedPagination = ({}) => {
  return (
    <Pagination separated>
      <PaginationItem>
        <PaginationLink previous href="#">
          <span aria-hidden="true">{"«"}</span>
          <span className="visually-hidden">Prev</span>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#">
          <span aria-hidden="true">{"»"}</span>
          <span className="visually-hidden">Next</span>
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default SeparatedPagination;
