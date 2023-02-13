import React from "react";
import { ModalBody } from "reactstrap";

const ModalBodyBase = ({ children, ...rest }) => {
  return <ModalBody {...rest}>{children}</ModalBody>;
};

export default ModalBodyBase;
