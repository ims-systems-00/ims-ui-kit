import React from "react";
import Pagination from "../PaginationBase";
import PaginationItem from "../PaginationItemBase";
import PaginationLink from "../PaginationLinkBase";

const SeparatedPagination = ({}) => {
  return (
    <>
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
          <PaginationLink>
            Next
          </PaginationLink>
        </PaginationItem>
      </Pagination>

      <br />
      <br />
      <Pagination>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              // console.log("Clicked Previous Page");
            }}
          >
            «
          </PaginationLink>
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink
            onClick={() => {
              // console.log("Clicked Page 1");
            }}
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              // console.log("Clicked Page 2");
            }}
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              // console.log("Clicked Page 3");
            }}
          >
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              // console.log("Clicked Page 4");
            }}
          >
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              // console.log("Clicked Page 5");
            }}
          >
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              // console.log("Clicked Next Page");
            }}
          >
            »
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </>
  );
};

export default SeparatedPagination;
