import React from "react";
import { Placeholder, PlaceholderProps } from "reactstrap";

interface PlaceholderBaseProps extends PlaceholderProps {}

const PlaceholderBase: React.FC<PlaceholderBaseProps> = ({
  children,
  ...rest
}) => {
  return <Placeholder {...rest}>{children}</Placeholder>;
};

export default PlaceholderBase;
