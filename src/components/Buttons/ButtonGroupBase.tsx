import React from "react";
import { ButtonGroup, ButtonGroupProps } from "reactstrap";

interface ButtonGroupBaseProps extends ButtonGroupProps {}

const ButtonGroupBase: React.FC<ButtonGroupBaseProps> = ({
  children,
  ...rest
}) => {
  return <ButtonGroup {...rest}>{children}</ButtonGroup>;
};

export default ButtonGroupBase;
