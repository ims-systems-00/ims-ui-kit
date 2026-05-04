import React from "react";
import { Button, ButtonProps } from "reactstrap";

export interface ButtonBaseProps extends ButtonProps {}

const ButtonBase: React.FC<ButtonBaseProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default ButtonBase;
