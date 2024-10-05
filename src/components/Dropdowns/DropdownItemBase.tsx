import React from "react";
import { DropdownItem, DropdownItemProps } from "reactstrap";

interface DropdownItemBaseProps extends DropdownItemProps {}

const DropdownItemBase: React.FC<DropdownItemBaseProps> = ({
  children,
  ...rest
}) => {
  return <DropdownItem {...rest}>{children}</DropdownItem>;
};

export default DropdownItemBase;
