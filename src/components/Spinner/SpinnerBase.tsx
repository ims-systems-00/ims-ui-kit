import React from "react";
import { Spinner, SpinnerProps } from "reactstrap";

interface SpinnerBaseProps extends SpinnerProps {}

const SpinnerBase: React.FC<SpinnerBaseProps> = ({ children, ...rest }) => {
  return <Spinner {...rest}>{children}</Spinner>;
};

export default SpinnerBase;
