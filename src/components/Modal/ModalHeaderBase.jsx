import React from "react";
import { ModalHeader } from "reactstrap";

const ModalHeaderBase = ({ children, ...rest }) => {
  return <ModalHeader {...rest}>{children}</ModalHeader>;
};

export default ModalHeaderBase;
