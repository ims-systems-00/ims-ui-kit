import React from "react";
import { Modal, ModalProps } from "reactstrap";

interface ModalBaseProps extends ModalProps {}

const ModalBase: React.FC<ModalBaseProps> = ({ children, ...rest }) => {
  return <Modal {...rest}>{children}</Modal>;
};

export default ModalBase;
