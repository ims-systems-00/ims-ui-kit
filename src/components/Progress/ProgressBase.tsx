import React from "react";
import { Progress, ProgressProps } from "reactstrap";

export interface ProgressBaseProps extends ProgressProps {}

const ProgressBase: React.FC<ProgressBaseProps> = (props) => {
  return <Progress {...props} />;
};

export default ProgressBase;
