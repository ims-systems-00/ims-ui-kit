import React from "react";
import { NavProps } from "reactstrap";
interface NavBaseProps extends NavProps {
    variant?: "primary" | "secondary" | "outline";
}
declare const NavBase: React.FC<NavBaseProps>;
export default NavBase;
