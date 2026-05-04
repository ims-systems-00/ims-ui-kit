import React from "react";
import { List, ListProps } from "reactstrap";

interface ListBaseProps extends ListProps {}

const ListBase: React.FC<ListBaseProps> = ({ children, ...rest }) => {
  return <List {...rest}>{children}</List>;
};

export default ListBase;
