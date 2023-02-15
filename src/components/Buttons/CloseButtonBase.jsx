import React from "react";
import { CloseButton } from "reactstrap";

let CloseButtonBaseProps = Object.assign({}, CloseButton.prototype?.props);

/**
 *
 * @param {CloseButtonBaseProps} props
 * @returns
 */

const CloseButtonBase = ({ children, ...rest }) => {
  return <CloseButton>{children}</CloseButton>;
};

CloseButtonBase.propTypes = {
  ...(CloseButton.propTypes && CloseButton.propTypes),
};

export default CloseButtonBase;
