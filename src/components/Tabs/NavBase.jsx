import classNames from "classnames";
import PropTypes from "prop-types";
import { Nav } from "reactstrap";

const NavBase = ({ children, full, individual, type = "1", ...rest }) => {
  let NavBaseProps = Object.assign(
    {
      full: false,
      individual: false,
      type: "1",
    },
    Nav.prototype.props
  );

  /**
   *
   * @param {NavBaseProps} props
   * @returns
   */
  return (
    <Nav
      className={classNames(`${rest.className || ""}`, {
        "nav-tabs-full": full && !individual,
        "nav-tabs-individual": individual && !full,
        "nav-tabs-full-1": full && type === "1" && !individual,
        "nav-tabs-full-2": full && type === "2" && !individual,
        "nav-tabs-full-3": full && type === "3" && !individual,
        "nav-tabs-individual-1": individual && type === "1" && !full,
        "nav-tabs-individual-2": individual && type === "2" && !full,
        "nav-tabs-individual-3": individual && type === "3" && !full,
      })}
      {...rest}
    >
      {children}
    </Nav>
  );
};

export default NavBase;

NavBase.propTypes = {
  full: PropTypes.bool,
  individual: PropTypes.bool,
  type: PropTypes.oneOf(["1", "2", "3"]),
  link: PropTypes.bool,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  leftIconStyle: PropTypes.string,
  rightIconStyle: PropTypes.string,
  ...(Nav.propTypes && Nav.propTypes),
};
