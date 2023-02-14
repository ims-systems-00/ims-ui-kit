import React from "react";
import { NavItem } from "reactstrap";

let NavItemBaseProps = Object.assign({}, NavItem.prototype.props);

/**
 *
 * @param {NavItemBaseProps} props
 * @returns
 */
const NavItemBase = ({ children, ...rest }) => {
  return <NavItem {...rest}>{children}</NavItem>;
};

NavItemBase.propTypes = {
  ...(NavItem.propTypes && NavItem.propTypes),
};

export default NavItemBase;
