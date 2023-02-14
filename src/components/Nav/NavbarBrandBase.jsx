import React from "react";
import { NavbarBrand } from "reactstrap";

let NavbarBrandBaseProps = Object.assign({}, NavbarBrand.prototype.props);

/**
 *
 * @param {NavbarBrandBaseProps} props
 * @returns
 */

const NavbarBrandBase = ({ children, ...rest }) => {
  return <NavbarBrand {...rest}>{children}</NavbarBrand>;
};

NavbarBrandBase.propTypes = {
  ...(NavbarBrand.propTypes && NavbarBrand.propTypes),
};

export default NavbarBrandBase;
