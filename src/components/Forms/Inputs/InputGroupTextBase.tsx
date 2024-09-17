import React from "react";
import { InputGroupText, InputGroupTextProps } from "reactstrap";

interface InputGroupTextBaseProps extends InputGroupTextProps {}

const InputGroupTextBase: React.FC<InputGroupTextBaseProps> = ({
  children,
  ...rest
}) => {
  return <InputGroupText {...rest}>{children}</InputGroupText>;
};

export default InputGroupTextBase;
