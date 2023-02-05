import classNames from "classnames";
import React from "react";
import { DropdownMenu } from "reactstrap";

let DropdownMenuBaseProps = Object.assign({}, DropdownMenu.prototype.props);

/**
 *
 * @param {DropdownMenuBaseProps} props
 * @returns
 */
const DropdownMenuBase = ({ ...props }) => {
  return (
    <DropdownMenu
      {...props}
      className={classNames("", {
        "action-menu": props.action,
      })}
    >
      {props.children}
    </DropdownMenu>
  );
};

DropdownMenuBase.propTypes = {
  ...(DropdownMenu.propTypes && DropdownMenu.propTypes),
};
export default DropdownMenuBase;
