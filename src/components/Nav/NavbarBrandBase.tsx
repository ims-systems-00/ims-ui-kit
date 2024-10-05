import React from "react";
import { NavbarBrand, NavbarBrandProps } from "reactstrap";

interface NavbarBrandBaseProps extends NavbarBrandProps {}

const NavbarBrandBase: React.FC<NavbarBrandBaseProps> = ({
  children,
  ...rest
}) => {
  return <NavbarBrand {...rest}>{children}</NavbarBrand>;
};

export default NavbarBrandBase;
