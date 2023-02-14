import React from "react";
import { ListGroupItem } from "reactstrap";

let ListGroupItemBaseProps = Object.assign(
  {},
  ListGroupItemBase.prototype.props
);

/**
 *
 * @param {ListGroupItemBaseProp} props
 * @returns
 */

const ListGroupItemBase = ({ children, ...rest }) => {
  return <ListGroupItem {...rest}>{children}</ListGroupItem>;
};

ListGroupItemBase.propTypes = {
  ...(ListGroupItem.propTypes && ListGroupItem.propTypes),
};

export default ListGroupItemBase;
