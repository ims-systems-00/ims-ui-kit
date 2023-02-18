import React from "react";
import { ModalFooter } from "reactstrap";


let ModalFooterBaseProps = Object.assign({}, ModalFooter.prototype.props);

/**
 *
 * @param {ModalFooterBaseProps} props
 * @returns
 */

const ModalFooterBase = ({ children, ...rest }) => {
  return <ModalFooter {...rest}>{children}</ModalFooter>;
};

ModalFooterBase.propTypes = {
  ...(ModalFooter.propTypes && ModalFooter.propTypes),
};

export default ModalFooterBase;
