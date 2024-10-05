import classNames from "classnames";
import React from "react";
import { Badge, BadgeProps } from "reactstrap";
import PropTypes from "prop-types";

interface BadgeBaseProps extends BadgeProps {
  outline: string;
  fade: string;
}

const BadgeBase: React.FC<BadgeBaseProps> = ({
  children,
  color,
  outline,
  fade,
  ...rest
}) => {
  return (
    <Badge
      color={color}
      className={classNames(rest.className, {
        "bg-secondary bg-pending": color === "pending",
        "badge-outline-primary": outline === "primary",
        "badge-outline-info": outline === "info",
        "badge-outline-secondary": outline === "secondary",
        "badge-outline-success": outline === "success",
        "badge-outline-danger": outline === "danger",
        "badge-outline-warning": outline === "warning",
        "badge-outline-light": outline === "light",
        "badge-outline-dark": outline === "dark",
        "badge-outline-pending": outline === "pending",
        "badge-fade-primary": fade === "primary",
        "badge-fade-info": fade === "info",
        "badge-fade-secondary": fade === "secondary",
        "badge-fade-success": fade === "success",
        "badge-fade-danger": fade === "danger",
        "badge-fade-warning": fade === "warning",
        "badge-fade-light": fade === "light",
        "badge-fade-dark": fade === "dark",
        "badge-fade-pending": fade === "pending",
      })}
      {...rest}
    >
      {children}
    </Badge>
  );
};

export default BadgeBase;
