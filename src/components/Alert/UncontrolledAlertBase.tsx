import React from "react";
import { UncontrolledAlert, UncontrolledAlertProps } from "reactstrap";

interface UncontrolledAlertBaseProps extends UncontrolledAlertProps {}

const UncontrolledAlertBase: React.FC<UncontrolledAlertBaseProps> = ({
  children,
  ...rest
}) => {
  return <UncontrolledAlert {...rest}>{children}</UncontrolledAlert>;
};

export default UncontrolledAlertBase;
