import React from "react";
import classNames from "classnames";
import { NavLink, NavLinkProps } from "reactstrap";

interface NavLinkBaseProps extends NavLinkProps {
  active?: boolean;
}

const NavLinkBase: React.FC<NavLinkBaseProps> = ({ children, ...rest }) => {
  return (
    <NavLink
      className={classNames(rest.className, {
        active: rest.active,
      })}
      {...rest}
    >
      {children}
    </NavLink>
  );
};

export default NavLinkBase;
