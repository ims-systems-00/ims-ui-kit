import React from "react";
import { BreadcrumbItem, BreadcrumbItemProps } from "reactstrap";

interface BreadcrumbItemBaseProps extends BreadcrumbItemProps {}

const BreadcrumbItemBase: React.FC<BreadcrumbItemBaseProps> = ({
  children,
  ...rest
}) => {
  return <BreadcrumbItem {...rest}>{children}</BreadcrumbItem>;
};

export default BreadcrumbItemBase;
