import React from "react";
import { ToastBody } from "reactstrap";

let ToastBodyBaseProps = Object.assign({}, ToastBody.prototype?.props);

/**
 * @param {ToastBodyBaseProps} props
 *  @returns
 * */

const ToastBodyBase = ({ children, ...rest }) => {
  return <ToastBody {...rest}>{children}</ToastBody>;
};

ToastBodyBase.propTypes = {
  ...(ToastBody.propTypes && ToastBody.propTypes),
};

export default ToastBodyBase;
