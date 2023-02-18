import React from "react";
import { Alert } from "reactstrap";

let AlertBaseProps = Object.assign({}, Alert.prototype?.props);

/**
 * @param {AlertBaseProps} props
 * @returns
 * */

const AlertBase = ({ children, ...rest }) => {
  return <Alert>{children}</Alert>;
};

AlertBase.propTypes = {
  ...(Alert.propTypes && Alert.propTypes),
};

export default AlertBase;
