import React from "react";
import { ListInlineItem, ListInlineItemProps } from "reactstrap";

interface ListInlineItemBaseProps extends ListInlineItemProps {}

const ListInlineItemBase: React.FC<ListInlineItemBaseProps> = ({
  children,
  ...rest
}) => {
  return <ListInlineItem {...rest}>{children}</ListInlineItem>;
};

export default ListInlineItemBase;
