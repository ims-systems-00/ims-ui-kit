import React from "react";
import { UncontrolledDropdown } from "reactstrap";

let UncontrolledDropdownBaseProps = Object.assign(
  {},
  UncontrolledDropdown.prototype.props
);

/**
 *
 * @param {UncontrolledDropdownBaseProps} props
 * @returns
 *
 *    */

const UncontrolledDropdownBase = ({ children, ...rest }) => {
  return <UncontrolledDropdown {...rest}>{children}</UncontrolledDropdown>;
};

UncontrolledDropdownBase.propTypes = {
  ...(UncontrolledDropdown.propTypes && UncontrolledDropdown.propTypes),
};

export default UncontrolledDropdownBase;
