import React from "react";
import { ButtonGroup } from "reactstrap";

let ButtonGroupBaseProps = Object.assign({}, ButtonGroup.prototype?.props);

/**
 *
 * @param {ButtonGroupBaseProps} props
 * @returns
 */

const ButtonGroupBase = ({ children, ...rest }) => {
  return <ButtonGroup {...rest}>{children}</ButtonGroup>;
};

ButtonGroupBase.propTypes = {
  ...(ButtonGroup.propTypes && ButtonGroup.propTypes),
};

export default ButtonGroupBase;
