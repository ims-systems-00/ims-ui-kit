import React from "react";
import { InputGroup, InputGroupProps } from "reactstrap";

export interface InputGroupBaseProps extends InputGroupProps {}

const InputGroupBase: React.FC<InputGroupBaseProps> = ({
  children,
  ...rest
}) => {
  return <InputGroup {...rest}>{children}</InputGroup>;
};

export default InputGroupBase;
