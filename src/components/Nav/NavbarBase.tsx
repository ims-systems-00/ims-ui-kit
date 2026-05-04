import React from "react";
import { Navbar, NavbarProps } from "reactstrap";

interface NavbarBaseProps extends NavbarProps {}

const NavBarBase: React.FC<NavbarBaseProps> = ({ children, ...rest }) => {
  return <Navbar {...rest}>{children}</Navbar>;
};

export default NavBarBase;
