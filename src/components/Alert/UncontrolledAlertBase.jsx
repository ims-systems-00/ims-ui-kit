import React from "react";
import { UncontrolledAlert } from "reactstrap";

let UncontrolledAlertBaseProps = Object.assign(
  {},
  UncontrolledAlert.prototype.props
);

/**
 * @param {UncontrolledAlertBaseProps} props
 * @returns
 * */

const UncontrolledAlertBase = ({ chilren, ...rest }) => {
  return <UncontrolledAlert {...rest}>{chilren}</UncontrolledAlert>;
};

UncontrolledAlertBase.propTypes = {
  ...(UncontrolledAlert.propTypes && UncontrolledAlert.propTypes),
};

export default UncontrolledAlertBase;
