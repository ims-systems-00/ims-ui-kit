import React from "react";
import { Dropdown, DropdownProps } from "reactstrap";

interface DropdownBaseProps extends DropdownProps {}

const DropdownBase: React.FC<DropdownBaseProps> = ({ children, ...rest }) => {
  return <Dropdown {...rest}>{children}</Dropdown>;
};

export default DropdownBase;
