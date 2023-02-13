import React from "react";
import { ModalFooter } from "reactstrap";

const ModalFooterBase = ({ children, ...rest }) => {
  return <ModalFooter {...rest}>{children}</ModalFooter>;
};

export default ModalFooterBase;
