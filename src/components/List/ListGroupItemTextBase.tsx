import React from "react";
import { ListGroupItemText, ListGroupItemTextProps } from "reactstrap";

interface ListGroupItemTextBaseProps extends ListGroupItemTextProps {}

const ListGroupItemTextBase: React.FC<ListGroupItemTextBaseProps> = ({
  children,
  ...rest
}) => {
  return <ListGroupItemText {...rest}>{children}</ListGroupItemText>;
};

export default ListGroupItemTextBase;
