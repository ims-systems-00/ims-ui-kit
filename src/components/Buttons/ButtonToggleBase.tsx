import React from "react";
import { ButtonToggle, ButtonToggleProps } from "reactstrap";

interface ButtonToggleBaseProps extends ButtonToggleProps {}

const ButtonToggleBase: React.FC<ButtonToggleBaseProps> = ({
  children,
  ...rest
}) => {
  return <ButtonToggle {...rest}>{children}</ButtonToggle>;
};

export default ButtonToggleBase;
