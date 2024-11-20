import React from "react";
import { ButtonToolbar, ButtonToolbarProps } from "reactstrap";

interface ButtonToolbarBaseProps extends ButtonToolbarProps {}

const ButtonToolbarBase: React.FC<ButtonToolbarBaseProps> = ({
  children,
  ...rest
}) => {
  return <ButtonToolbar {...rest}>{children}</ButtonToolbar>;
};

export default ButtonToolbarBase;
