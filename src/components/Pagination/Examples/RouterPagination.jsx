import React from "react";
import Pagination from "../PaginationBase";
import PaginationItem from "../PaginationItemBase";
import PaginationLink from "../PaginationLinkBase";

const RouterPagination = ({}) => {
  return (
    <Pagination separated>
      <PaginationItem>
        <PaginationLink previous link>
          <span aria-hidden="true" className="visually-hidden">
            {"<"}
          </span>
          <span class="">Prev</span>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink link>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink link>2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink link>3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink link>4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink link>5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink link next>
          <span aria-hidden="true" className="visually-hidden">
            {">"}
          </span>
          <span class="">Next</span>
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default RouterPagination;
