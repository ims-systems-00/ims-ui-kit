import React from "react";
import classNames from "classnames";
import { Nav, NavProps } from "reactstrap";

interface NavBaseProps extends NavProps {
  variant?: "primary" | "secondary" | "outline";
}

const NavBase: React.FC<NavBaseProps> = ({
  children,
  variant = "primary",
  ...rest
}) => {
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
