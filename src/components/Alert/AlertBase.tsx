import React from "react";
import { Alert, AlertProps } from "reactstrap";

interface AlertBaseProps extends AlertProps {}

const AlertBase: React.FC<AlertBaseProps> = ({ children, ...rest }) => {
  return <Alert {...rest}>{children}</Alert>;
};

export default AlertBase;
