import React from "react";
import { DropdownItem } from "reactstrap";
let DropdownItemBaseProps = Object.assign({}, DropdownItem.prototype.props);

/**
 *
 * @param {DropdownItemBaseProps} props
 * @returns
 */
const DropdownItemBase = ({ ...props }) => {
  return <DropdownItem {...props}>{props.children}</DropdownItem>;
};

DropdownItemBase.propTypes = {
  ...(DropdownItem.propTypes && DropdownItem.propTypes),
};

export default DropdownItemBase;
