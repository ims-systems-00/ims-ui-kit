import React from "react";
import { Breadcrumb } from "reactstrap";

const BreadcrumbBase = ({ children, ...rest }) => {
  return <Breadcrumb {...rest}>{children}</Breadcrumb>;
};

export default BreadcrumbBase;
