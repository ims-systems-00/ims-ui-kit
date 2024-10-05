import React from "react";
import { NavItem, NavItemProps } from "reactstrap";

interface NavItemBaseProps extends NavItemProps {}

const NavItemBase: React.FC<NavItemBaseProps> = ({ children, ...rest }) => {
  return <NavItem {...rest}>{children}</NavItem>;
};

export default NavItemBase;
