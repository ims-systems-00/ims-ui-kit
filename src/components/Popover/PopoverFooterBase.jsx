import React from "react";
import { PopoverHeader } from "reactstrap";

let PopoverFooterBaseProps = Object.assign({}, PopoverHeader.propTypes);

/**
 *
 * @param {PopoverFooterBaseProps} param0
 * @returns
 */

const PopoverFooterBase = ({ children, ...rest }) => {
  return <PopoverHeader {...rest}>{children}</PopoverHeader>;
};

PopoverFooterBase.propTypes = PopoverFooterBaseProps;

export default PopoverFooterBase;
