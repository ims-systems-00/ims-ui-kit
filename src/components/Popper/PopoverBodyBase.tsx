import React from "react";
import { PopoverBody, PopoverBodyProps } from "reactstrap";

interface PopoverBodyBaseProps extends PopoverBodyProps {}

const PopoverBodyBase: React.FC<PopoverBodyBaseProps> = ({
  children,
  ...rest
}) => {
  return <PopoverBody {...rest}>{children}</PopoverBody>;
};

export default PopoverBodyBase;
