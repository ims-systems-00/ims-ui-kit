import React from "react";
import { Modal } from "reactstrap";

let ModalBaseProps = Object.assign({}, Modal.prototype.props);

/**
 *
 * @param {ModalBaseProps} props
 * @returns
 */

const ModalBase = ({ children, ...rest }) => {
  return <Modal {...rest}>{children}</Modal>;
};

ModalBase.propTypes = {
  ...(Modal.propTypes && Modal.propTypes),
};

export default ModalBase;
