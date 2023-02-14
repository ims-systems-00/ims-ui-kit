import React from "react";
import { PaginationItem } from "reactstrap";

const PaginationItemBase = ({ children, ...rest }) => {
  return <PaginationItem {...rest}>{children}</PaginationItem>;
};

export default PaginationItemBase;
