import React from "react";
import { DropdownMenu, DropdownMenuProps } from "reactstrap";

interface DropdownMenuBaseProps extends DropdownMenuProps {}

const DropdownMenuBase: React.FC<DropdownMenuBaseProps> = ({
  children,
  ...rest
}) => {
  return <DropdownMenu {...rest}>{children}</DropdownMenu>;
};

export default DropdownMenuBase;
