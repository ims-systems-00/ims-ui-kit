import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "reactstrap";

let NavLinkProps = Object.assign(
  {
    link: false,
    leftIcon: "",
    rightIcon: "",
    leftIconStyle: "",
    rightIconStyle: "",
  },
  NavLink.prototype.props
);

/**
 *
 * @param {NavLinkProps} props
 * @returns
 */

const NavLinkBase = ({
  link,
  children,
  leftIcon = "",
  rightIcon = "",
  leftIconStyle = "",
  rightIconStyle = "",
  ...rest
}) => {
  if (link) {
    return (
      <NavLink {...rest}>
        {leftIcon && (
          <i
            className={classNames(`me-2`, {
              [leftIcon]: leftIcon,
              [leftIconStyle]: leftIconStyle,
            })}
          />
        )}
        {children}
        {rightIcon && (
          <i
            className={classNames(`ms-2`, {
              [rightIcon]: rightIcon,
              [rightIconStyle]: rightIconStyle,
            })}
          />
        )}
      </NavLink>
    );
  } else {
    return (
      <span
        className={classNames(`nav-link ${rest.className}`, {
          active: rest.active,
        })}
        {...rest}
      >
        {leftIcon && (
          <i
            className={classNames(`me-2`, {
              [leftIcon]: leftIcon,
              [leftIconStyle]: leftIconStyle,
            })}
          />
        )}
        {children}
        {rightIcon && (
          <i
            className={classNames(`ms-2`, {
              [rightIcon]: rightIcon,
              [rightIconStyle]: rightIconStyle,
            })}
          />
        )}
      </span>
    );
  }
};

export default NavLinkBase;

NavLinkBase.propTypes = {
  link: PropTypes.bool,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  leftIconStyle: PropTypes.string,
  rightIconStyle: PropTypes.string,
  ...(NavLink.propTypes && NavLink.propTypes),
};
