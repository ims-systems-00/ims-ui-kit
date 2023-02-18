import React from "react";
import { ModalHeader } from "reactstrap";

let ModalHeaderBaseProps = Object.assign({}, ModalHeader.prototype.props);

/**
 *
 * @param {ModalHeaderBaseProps} props
 * @returns
 */

const ModalHeaderBase = ({ children, ...rest }) => {
  return <ModalHeader {...rest}>{children}</ModalHeader>;
};

ModalHeaderBase.propTypes = {
  ...(ModalHeader.propTypes && ModalHeader.propTypes),
};

export default ModalHeaderBase;
