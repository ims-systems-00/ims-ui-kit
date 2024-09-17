import React from "react";
import { Toast, ToastProps } from "reactstrap";

interface ToastBaseProps extends ToastProps {}

const ToastBase: React.FC<ToastBaseProps> = ({ children, ...rest }) => {
  return <Toast {...rest}>{children}</Toast>;
};

export default ToastBase;
