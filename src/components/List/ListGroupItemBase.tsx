import React from "react";
import { ListGroupItem, ListGroupItemProps } from "reactstrap";

interface ListGroupItemBaseProps extends ListGroupItemProps {}

const ListGroupItemBase: React.FC<ListGroupItemBaseProps> = ({
  children,
  ...rest
}) => {
  return <ListGroupItem {...rest}>{children}</ListGroupItem>;
};

export default ListGroupItemBase;
