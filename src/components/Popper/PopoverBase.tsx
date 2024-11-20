import React from "react";
import { Popover, PopoverProps } from "reactstrap";

interface PopoverBaseProps extends PopoverProps {}

const PopoverBase: React.FC<PopoverBaseProps> = ({ children, ...rest }) => {
  return <Popover {...rest}>{children}</Popover>;
};

export default PopoverBase;
