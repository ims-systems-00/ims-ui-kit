import React from "react";
import { ButtonDropdown } from "reactstrap";

let ButtonDropdownBaseProps = Object.assign(
  {},
  ButtonDropdown.prototype?.props
);

/**
 *
 * @param {ButtonDropdownBaseProps} props
 * @returns
 */

const ButtonDropdownBase = ({ children, ...rest }) => {
  return <ButtonDropdown {...rest}>{children}</ButtonDropdown>;
};

ButtonDropdownBase.propTypes = {
  ...(ButtonDropdown.propTypes && ButtonDropdown.propTypes),
};

export default ButtonDropdownBase;
