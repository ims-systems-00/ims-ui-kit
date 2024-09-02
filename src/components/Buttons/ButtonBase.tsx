import React from "react";
import { Button, ButtonProps } from "reactstrap";

interface ButtonBaseProps extends ButtonProps {}

const ButtonBase: React.FC<ButtonBaseProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default ButtonBase;
