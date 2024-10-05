import React from "react";
import { ToastBody, ToastBodyProps } from "reactstrap";

interface ToastBodyBaseProps extends ToastBodyProps {}

const ToastBodyBase: React.FC<ToastBodyBaseProps> = ({ children, ...rest }) => {
  return <ToastBody {...rest}>{children}</ToastBody>;
};

export default ToastBodyBase;
