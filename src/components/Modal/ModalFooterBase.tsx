import React from "react";
import { ModalFooter, ModalFooterProps } from "reactstrap";

interface ModalFooterBaseProps extends ModalFooterProps {}

const ModalFooterBase: React.FC<ModalFooterBaseProps> = ({
  children,
  ...rest
}) => {
  return <ModalFooter {...rest}>{children}</ModalFooter>;
};

export default ModalFooterBase;
