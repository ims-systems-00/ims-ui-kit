import React from "react";
import { ListGroupItemHeading, ListGroupItemHeadingProps } from "reactstrap";

interface ListGroupItemHeadingBaseProps extends ListGroupItemHeadingProps {}

const ListGroupItemHeadingBase: React.FC<ListGroupItemHeadingBaseProps> = ({
  children,
  ...rest
}) => {
  return <ListGroupItemHeading {...rest}>{children}</ListGroupItemHeading>;
};

export default ListGroupItemHeadingBase;
