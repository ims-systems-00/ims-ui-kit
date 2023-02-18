import React from "react";
import { PopoverHeader } from "reactstrap";

let PopoverHeaderBaseProps = Object.assign({}, PopoverHeader.prototype.props);

/**
 * @param {PopoverHeaderBaseProps}
 * @returns
 * */

const PopoverHeaderBase = ({ children, ...rest }) => {
  return <PopoverHeader {...rest}>{children}</PopoverHeader>;
};

PopoverHeaderBase.propTypes = {
  ...(PopoverHeader.propTypes && PopoverHeader.propTypes),
};

export default PopoverHeaderBase;
