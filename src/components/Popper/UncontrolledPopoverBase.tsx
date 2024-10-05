import React from "react";
import { UncontrolledPopover, UncontrolledPopoverProps } from "reactstrap";

interface UncontrolledPopoverBaseProps extends UncontrolledPopoverProps {}

const UncontrolledPopoverBase: React.FC<UncontrolledPopoverBaseProps> = ({
  children,
  ...rest
}) => {
  return <UncontrolledPopover {...rest}>{children}</UncontrolledPopover>;
};

export default UncontrolledPopoverBase;
