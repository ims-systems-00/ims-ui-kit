import classNames from "classnames";
import PropTypes from "prop-types";
import { Nav, Row } from "reactstrap";

const NavBase = ({ children, variant = "primary", ...rest }) => {
  let NavBaseProps = Object.assign(
    {
      variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
    },
    Nav.prototype.props
  );

  /**
   *
   * @param {NavBaseProps} props
   * @returns
   */
  //variant="primary"
  //variant="secondary"
  //variant="outline"
  return (
    <Nav
      className={classNames(`${rest.className || ""}`, {
        "nav-tabs-primary": variant === "primary",
        "nav-tabs-secondary": variant === "secondary",
        "nav-tabs-outline": variant === "outline",
      })}
      {...rest}
    >
      {children}
    </Nav>
  );
};

export default NavBase;

NavBase.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  ...(Nav.propTypes && Nav.propTypes),
};
