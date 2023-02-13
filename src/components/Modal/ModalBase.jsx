import React from "react";
import { Modal } from "reactstrap";

const ModalBase = ({ children, ...rest }) => {
  return <Modal {...rest}>{children}</Modal>;
};

export default ModalBase;
