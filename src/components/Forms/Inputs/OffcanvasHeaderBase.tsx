import React from "react";
import { OffcanvasHeader, OffcanvasHeaderProps } from "reactstrap";

interface OffcanvasHeaderBaseProps extends OffcanvasHeaderProps {}

const OffcanvasHeaderBase: React.FC<OffcanvasHeaderBaseProps> = ({
  children,
  ...rest
}) => {
  return <OffcanvasHeader {...rest}>{children}</OffcanvasHeader>;
};

export default OffcanvasHeaderBase;
