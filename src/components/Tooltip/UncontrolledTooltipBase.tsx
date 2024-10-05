import React from "react";
import { UncontrolledTooltip, UncontrolledTooltipProps } from "reactstrap";

interface UncontrolledTooltipBaseProps extends UncontrolledTooltipProps {}

const UncontrolledTooltipBase: React.FC<UncontrolledTooltipBaseProps> = ({
  children,
  ...rest
}) => {
  return <UncontrolledTooltip {...rest}>{children}</UncontrolledTooltip>;
};

export default UncontrolledTooltipBase;
