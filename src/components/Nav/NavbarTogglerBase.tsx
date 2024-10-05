import React from "react";
import { NavbarToggler, NavbarTogglerProps } from "reactstrap";

interface NavbarTogglerBaseProps extends NavbarTogglerProps {}

const NavbarTogglerBase: React.FC<NavbarTogglerBaseProps> = ({
  children,
  ...rest
}) => {
  return <NavbarToggler {...rest}>{children}</NavbarToggler>;
};

export default NavbarTogglerBase;
