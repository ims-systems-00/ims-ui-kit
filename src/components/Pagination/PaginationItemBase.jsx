import React from "react";
import { PaginationItem } from "reactstrap";

let PaginationItemBaseProps = Object.assign({}, PaginationItem.prototype.props);
/**
 *
 * @param {PaginationItemBaseProps} props
 * @returns
 */

const PaginationItemBase = ({ children, ...rest }) => {
  return <PaginationItem {...rest}>{children}</PaginationItem>;
};

PaginationItemBase.propTypes = {
  ...(PaginationItem.propTypes && PaginationItem.propTypes),
};

export default PaginationItemBase;
