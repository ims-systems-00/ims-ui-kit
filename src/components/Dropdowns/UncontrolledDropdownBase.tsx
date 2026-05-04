import React from "react";
import { UncontrolledDropdown, UncontrolledDropdownProps } from "reactstrap";
export interface UncontrolledDropdownBaseProps
  extends UncontrolledDropdownProps {}
const UncontrolledDropdownBase: React.FC<UncontrolledDropdownBaseProps> = ({
  children,
  ...rest
}) => {
  return <UncontrolledDropdown {...rest}>{children}</UncontrolledDropdown>;
};

export default UncontrolledDropdownBase;
