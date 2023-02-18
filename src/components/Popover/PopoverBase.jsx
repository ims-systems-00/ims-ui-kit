import React from "react";
import { Popover } from "reactstrap";

let PopoverBaseProps = Object.assign({}, Popover.prototype.props);

/**
 * @param {PopoverBaseProps} props
 * @returns
 * */

const PopoverBase = ({ children, ...rest }) => {
  return <Popover {...rest}>{children}</Popover>;
};

PopoverBase.propTypes = {
  ...(Popover.propTypes && Popover.propTypes),
};

export default PopoverBase;
