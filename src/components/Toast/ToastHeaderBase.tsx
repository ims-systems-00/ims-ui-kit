import React from "react";
import { ToastHeader, ToastHeaderProps } from "reactstrap";

interface ToastHeaderBaseProps extends ToastHeaderProps {}

const ToastHeaderBase: React.FC<ToastHeaderBaseProps> = ({
  children,
  ...rest
}) => {
  return <ToastHeader {...rest}>ToastHeaderBase</ToastHeader>;
};

export default ToastHeaderBase;
