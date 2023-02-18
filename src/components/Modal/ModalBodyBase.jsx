import React from "react";
import { ModalBody } from "reactstrap";

let ModalBodyBaseProps = Object.assign({}, ModalBody.prototype.props);

/**
 *
 * @param {ModalBodyBaseProps} props
 * @returns
 */

const ModalBodyBase = ({ children, ...rest }) => {
  return <ModalBody {...rest}>{children}</ModalBody>;
};

ModalBodyBase.propTypes = {
  ...(ModalBody.propTypes && ModalBody.propTypes),
};

export default ModalBodyBase;
