import React from "react";
import { BreadcrumbItem } from "reactstrap";

const BreadcrumbItemBase = ({ children, ...rest }) => {
  return <BreadcrumbItem {...rest}>{children}</BreadcrumbItem>;
};

export default BreadcrumbItemBase;
