import React from "react";
import { PaginationLink } from "reactstrap";

const PaginationLinkBase = ({ children, ...rest }) => {
  return <PaginationLink {...rest}>{children}</PaginationLink>;
};

export default PaginationLinkBase;
