import React from "react";
import { PlaceholderButton, PlaceholderButtonProps } from "reactstrap";

interface PlaceholderButtonBaseProps extends PlaceholderButtonProps {}

const PlaceholderButtonBase: React.FC<PlaceholderButtonBaseProps> = ({
  children,
  ...rest
}) => {
  return <PlaceholderButton {...rest}>{children}</PlaceholderButton>;
};

export default PlaceholderButtonBase;
