import React from "react";
import { Breadcrumb, BreadcrumbProps } from "reactstrap";

interface BreadcrumbBaseProps extends BreadcrumbProps {}

const BreadcrumbBase: React.FC<BreadcrumbBaseProps> = ({
  children,
  ...rest
}) => {
  return <Breadcrumb {...rest}>{children}</Breadcrumb>;
};

export default BreadcrumbBase;
