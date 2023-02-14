import React from "react";
import { NavbarText } from "reactstrap";

let NavbarTextBaseProps = Object.assign({}, NavbarText.prototype.props);

/**
 *
 * @param {NavbarTextBaseProps} props
 * @returns
 */

const NavbarTextBase = ({ children, ...rest }) => {
  return <NavbarText {...rest}>{children}</NavbarText>;
};

NavbarTextBase.propTypes = {
  ...(NavbarText.propTypes && NavbarText.propTypes),
};

export default NavbarTextBase;
