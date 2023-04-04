import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "reactstrap";

let NavLinkProps = Object.assign({}, NavLink.prototype.props);

/**
 *
 * @param {NavLinkProps} props
 * @returns
 */

const NavLinkBase = ({ children, ...rest }) => {
  return (
    <span
      className={classNames(`nav-link ${rest.className}`, {
        active: rest.active,
      })}
      {...rest}
    >
      {children}
    </span>
  );
};

export default NavLinkBase;

NavLinkBase.propTypes = {
  ...(NavLink.propTypes && NavLink.propTypes),
};
