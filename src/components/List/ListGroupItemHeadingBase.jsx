import React from "react";
import { ListGroupItemHeading } from "reactstrap";

let ListGroupItemHeadingBaseProps = Object.assign(
  {},
  ListGroupItemHeadingBase.prototype.props
);

/**
 *
 * @param {ListGroupItemHeadingBaseProps} props
 * @returns
 */

const ListGroupItemHeadingBase = ({ children, ...rest }) => {
  return <ListGroupItemHeading {...rest}>{children}</ListGroupItemHeading>;
};

ListGroupItemHeadingBase.propTypes = {
  ...(ListGroupItemHeading.propTypes && ListGroupItemHeading.propTypes),
};

export default ListGroupItemHeadingBase;
