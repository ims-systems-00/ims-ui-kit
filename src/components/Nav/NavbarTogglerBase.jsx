import React from "react";
import { NavbarToggler } from "reactstrap";

let NavbarTogglerBaseProps = Object.assign({}, NavbarToggler.prototype.props);

/**
 *
 * @param {NavbarTogglerBaseProps} props
 * @returns
 */

const NavbarTogglerBase = ({ children, ...rest }) => {
  return <NavbarToggler {...rest}>{children}</NavbarToggler>;
};

NavbarTogglerBase.propTypes = {
  ...(NavbarToggler.propTypes && NavbarToggler.propTypes),
};

export default NavbarTogglerBase;
