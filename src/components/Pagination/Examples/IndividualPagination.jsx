import React from "react";
import Pagination from "../PaginationBase";
import PaginationItem from "../PaginationItemBase";
import PaginationLink from "../PaginationLinkBase";

const IndividualPagination = ({}) => {
  return (
    <>
      <Pagination>
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
          <PaginationLink next href="#">
            <span aria-hidden="true">{"»"}</span>
            <span className="visually-hidden">Next</span>
          </PaginationLink>
        </PaginationItem>
      </Pagination>
      <br /> <br />
      <Pagination>
        <PaginationItem>
          <PaginationLink previous href="#">
            <span aria-hidden="true" className="visually-hidden">
              {"»"}
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
              {"»"}
            </span>
            <span class="">Next</span>
          </PaginationLink>
        </PaginationItem>
      </Pagination>
      <br /> <br />
      <Pagination separated>
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
      </Pagination>
      <br /> <br />
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
          <PaginationLink next href="#">
            <span aria-hidden="true">{"»"}</span>
            <span className="visually-hidden">Next</span>
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </>
  );
};

export default IndividualPagination;
