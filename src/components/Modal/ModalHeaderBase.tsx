import React from "react";
import { ModalHeader, ModalHeaderProps } from "reactstrap";

interface ModalHeaderBaseProps extends ModalHeaderProps {}

const ModalHeaderBase: React.FC<ModalHeaderBaseProps> = ({
  children,
  ...rest
}) => {
  return <ModalHeader {...rest}>{children}</ModalHeader>;
};

export default ModalHeaderBase;
