import React from "react";
import { InputGroup } from "reactstrap";

const InputGroupBase = ({ children, ...rest }) => {
  return <InputGroup {...rest}>{children}</InputGroup>;
};

export default InputGroupBase;
