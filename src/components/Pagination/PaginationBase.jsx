import classNames from "classnames";
import React from "react";
import { Pagination } from "reactstrap";

const PaginationBase = ({ children, separated, ...rest }) => {
  return (
    <Pagination
      className={classNames("", {
        "pagination-separated": separated,
      })}
      {...rest}
    >
      {children}
    </Pagination>
  );
};

export default PaginationBase;
