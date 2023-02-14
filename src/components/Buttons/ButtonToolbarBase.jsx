import React from "react";
import { ButtonToolbar } from "reactstrap";

let ButtonToolbarBaseProps = Object.assign({}, ButtonToolbar.prototype?.props);

/**
 *
 * @param {ButtonToolbarBaseProps} props
 * @returns
 */
const ButtonToolbarBase = ({ children, ...rest }) => {
  return <ButtonToolbar {...rest}>{children}</ButtonToolbar>;
};

ButtonToolbarBase.propTypes = {
  ...(ButtonToolbar.propTypes && ButtonToolbar.propTypes),
};

export default ButtonToolbarBase;
