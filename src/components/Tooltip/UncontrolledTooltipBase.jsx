import React from "react";
import { UncontrolledTooltip } from "reactstrap";

let UncontrolledTooltipBaseProps = Object.assign(
  {},
  UncontrolledTooltip.prototype.props
);

/**
 * @param {UncontrolledTooltipBaseProps} props
 * @returns
 * */

const UncontrolledTooltipBase = ({ children, ...rest }) => {
  return <UncontrolledTooltip {...rest}>{children}</UncontrolledTooltip>;
};

UncontrolledTooltipBase.propTypes = {
  ...(UncontrolledTooltip.propTypes && UncontrolledTooltip.propTypes),
};
export default UncontrolledTooltipBase;
