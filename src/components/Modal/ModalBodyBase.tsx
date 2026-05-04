import React from "react";
import { ModalBody, ModalBodyProps } from "reactstrap";

interface ModalBodyBaseProps extends ModalBodyProps {}

const ModalBodyBase: React.FC<ModalBodyBaseProps> = ({ children, ...rest }) => {
  return <ModalBody {...rest}>{children}</ModalBody>;
};

export default ModalBodyBase;
