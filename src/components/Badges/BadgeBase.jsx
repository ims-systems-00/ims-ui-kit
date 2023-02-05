import classNames from "classnames";
import React from "react";
import { Badge } from "reactstrap";
import PropTypes from "prop-types";

let BadgeBaseProps = Object.assign(
  {
    color: "",
  },
  Badge.prototype.props
);

/**
 *
 * @param {BadgeBaseProps} props
 * @returns
 */

const BadgeBase = ({ children, color, ...rest }) => {
  return (
    <Badge
      color={color}
      className={classNames("", {
        "bg-secondary bg-pending": color === "pending",
      })}
      {...rest}
    >
      {children}
    </Badge>
  );
};

BadgeBase.propTypes = {
  color: PropTypes.string,
  ...(Badge.propTypes && Badge.propTypes),
};

export default BadgeBase;
