import React from "react";
import { ButtonDropdown, ButtonDropdownProps } from "reactstrap";

interface ButtonDropdownBaseProps extends ButtonDropdownProps {}

const ButtonDropdownBase: React.FC<ButtonDropdownBaseProps> = ({
  children,
  ...rest
}) => {
  return <ButtonDropdown {...rest}>{children}</ButtonDropdown>;
};

export default ButtonDropdownBase;
