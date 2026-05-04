import React from "react";
import { PaginationItem, PaginationItemProps } from "reactstrap";

interface PaginationItemBaseProps extends PaginationItemProps {}

const PaginationItemBase: React.FC<PaginationItemBaseProps> = ({
  children,
  ...rest
}) => {
  return <PaginationItem {...rest}>{children}</PaginationItem>;
};

export default PaginationItemBase;
