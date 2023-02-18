import React from "react";
import { PopoverBody } from "reactstrap";

let PopoverBodyBaseProps = Object.assign({}, PopoverBody.prototype.props);

/**
 * @param {PopoverBodyBaseProps}
 * @returns
 * */

const PopoverBodyBase = ({ children, ...rest }) => {
  return <PopoverBody {...rest}>{children}</PopoverBody>;
};

PopoverBodyBase.propTypes = {
  ...(PopoverBody.propTypes && PopoverBody.propTypes),
};

export default PopoverBodyBase;
