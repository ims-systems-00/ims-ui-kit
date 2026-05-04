import React from "react";
import { NavbarText, NavbarTextProps } from "reactstrap";

interface NavbarTextBaseProps extends NavbarTextProps {}

const NavbarTextBase: React.FC<NavbarTextBaseProps> = ({
  children,
  ...rest
}) => {
  return <NavbarText {...rest}>{children}</NavbarText>;
};

export default NavbarTextBase;
