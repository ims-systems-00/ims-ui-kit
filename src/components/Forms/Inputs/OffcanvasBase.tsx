import React from "react";
import { Offcanvas, OffcanvasProps } from "reactstrap";

interface OffcanvasBaseProps extends OffcanvasProps {}

const OffcanvasBase: React.FC<OffcanvasBaseProps> = ({ children, ...rest }) => {
  return <Offcanvas {...rest}>{children}</Offcanvas>;
};

export default OffcanvasBase;
