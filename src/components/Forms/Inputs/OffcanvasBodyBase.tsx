import React from "react";
import { OffcanvasBody, OffcanvasBodyProps } from "reactstrap";

interface OffcanvasBodyBaseProps extends OffcanvasBodyProps {}

const OffcanvasBodyBase: React.FC<OffcanvasBodyBaseProps> = ({
  children,
  ...rest
}) => {
  return <OffcanvasBody {...rest}>{children}</OffcanvasBody>;
};

export default OffcanvasBodyBase;
