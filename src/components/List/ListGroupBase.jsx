import React from "react";
import { ListGroup } from "reactstrap";

let ListGroupBaseProps = Object.assign({}, ListGroup.prototype?.props);

/**
 *
 * @param {ListGroupBaseProps} props
 * @returns
 */

const ListGroupBase = ({ children, ...rest }) => {
  return <ListGroup {...rest}>{children}</ListGroup>;
};

ListGroupBase.propTypes = {
  ...(ListGroup.propTypes && ListGroup.propTypes),
};

export default ListGroupBase;
