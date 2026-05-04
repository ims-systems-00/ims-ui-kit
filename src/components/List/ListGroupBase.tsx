import React from "react";
import { ListGroup, ListGroupProps } from "reactstrap";

interface ListGroupBaseProps extends ListGroupProps {}

const ListGroupBase: React.FC<ListGroupBaseProps> = ({ children, ...rest }) => {
  return <ListGroup {...rest}>{children}</ListGroup>;
};

export default ListGroupBase;
