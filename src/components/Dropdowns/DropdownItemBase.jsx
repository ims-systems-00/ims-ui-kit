import React from "react";
import { DropdownItem } from "reactstrap";
let DropdownItemBaseProps = Object.assign({}, DropdownItem.prototype.props);

/**
 *
 * @param {DropdownItemBaseProps} props
 * @returns
 */
const DropdownItemBase = ({
  leftIcon = "",
  rightIcon = "",
  leftIconStyle = "text-secondary",
  rightIconStyle = "text-secondary",
  ...props
}) => {
  return (
    <DropdownItem {...props} className="d-flex justify-content-between align-items-center">
      <span>
        {leftIcon && <i className={`${leftIcon} ${leftIconStyle} me-2`} />}
        {props.children}
      </span>
      {rightIcon && <i className={`${rightIcon} ${rightIconStyle}`} />}
    </DropdownItem>
  );
};

DropdownItemBase.propTypes = {
  ...(DropdownItem.propTypes && DropdownItem.propTypes),
};

export default DropdownItemBase;
