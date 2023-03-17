import React from "react";
import { Nav } from "reactstrap";

let NavBaseProps = Object.assign({}, Nav.prototype.props);

/**
 *
 * @param {NavBaseProps} props
 * @returns
 */
const NavBase = ({ children, ...rest }) => {
  return <Nav {...rest}>{children}</Nav>;
};

NavBase.propTypes = {
  ...(Nav.propTypes && Nav.propTypes),
};

export default NavBase;
