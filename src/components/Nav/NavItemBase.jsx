import { Col, NavItem } from "reactstrap";

let NavItemProps = Object.assign({}, NavItem.prototype.props);

/**
 *
 * @param {NavItemProps} props
 * @returns
 */

const NavItemBase = ({ children, ...rest }) => {
  return (
    <Col>
      <NavItem {...rest}>{children}</NavItem>
    </Col>
  );
};

export default NavItemBase;

NavItemBase.propTypes = {
  ...(NavItem.propTypes && NavItem.propTypes),
};
