import classNames from "classnames";
import React from "react";
import { PaginationLink } from "reactstrap";

const PaginationLinkBase = ({ children, link, ...rest }) => {
  if (link) {
    //in case of react router, we need to send Link tag as children
    return <span className="page-link">{children}</span>;
  } else {
    return <PaginationLink {...rest}>{children}</PaginationLink>;
  }
};

export default PaginationLinkBase;
