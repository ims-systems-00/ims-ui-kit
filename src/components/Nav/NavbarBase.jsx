import React from "react";
import { Navbar } from "reactstrap";

let NavbarBaseProps = Object.assign({}, Navbar.prototype.props);

/**
 *
 * @param {NavbarBaseProps} props
 * @returns
 */

const NavBarBase = ({ children, ...rest }) => {
  return <Navbar {...rest}>{children}</Navbar>;
};

NavBarBase.propTypes = {
  ...(Navbar.propTypes && Navbar.propTypes),
};

export default NavBarBase;
