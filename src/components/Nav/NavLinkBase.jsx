import React from "react";
import { NavLink } from "reactstrap";

let NavLinkBaseProps = Object.assign({}, NavLink.prototype.props);

/**
 *
 * @param {NavLinkBaseProps} props
 * @returns
 */
const NavLinkBase = ({ children, ...rest }) => {
  return <NavLink {...rest}>{children}</NavLink>;
};

NavLinkBase.propTypes = {
    ...(NavLink.propTypes && NavLink.propTypes),
};

export default NavLinkBase;
