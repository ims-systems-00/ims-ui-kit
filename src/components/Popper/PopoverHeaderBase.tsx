import React from "react";
import { PopoverHeader, PopoverHeaderProps } from "reactstrap";

interface PopoverHeaderBaseProps extends PopoverHeaderProps {}

const PopoverHeaderBase: React.FC<PopoverHeaderBaseProps> = ({
  children,
  ...rest
}) => {
  return <PopoverHeader {...rest}>{children}</PopoverHeader>;
};

export default PopoverHeaderBase;
