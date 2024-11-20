import React from "react";
import { NavLinkProps } from "reactstrap";
interface NavLinkBaseProps extends NavLinkProps {
    active?: boolean;
}
declare const NavLinkBase: React.FC<NavLinkBaseProps>;
export default NavLinkBase;
