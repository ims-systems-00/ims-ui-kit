import React from "react";
import Pagination from "../PaginationBase";
import PaginationItem from "../PaginationItemBase";
import PaginationLink from "../PaginationLinkBase";

const DefaultPagination = ({}) => {
  return (
    <Pagination>
      <PaginationItem>
        <PaginationLink>Prev</PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink>2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink>3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink>4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink>5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink>Next</PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default DefaultPagination;
