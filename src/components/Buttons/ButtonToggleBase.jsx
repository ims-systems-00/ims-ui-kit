import React from "react";
import { ButtonToggle } from "reactstrap";

let ButtonToggleBaseProps = Object.assign({}, ButtonToggle.prototype?.props);

/**
 *
 * @param {ButtonToggleBaseProps} props
 * @returns
 */

const ButtonToggleBase = ({ children, ...rest }) => {
  return <ButtonToggle {...rest}>{children}</ButtonToggle>;
};

ButtonToggleBase.propTypes = {
  ...(ButtonToggle.propTypes && ButtonToggle.propTypes),
};

export default ButtonToggleBase;
