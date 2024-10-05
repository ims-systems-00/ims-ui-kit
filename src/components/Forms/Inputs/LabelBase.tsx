import React from "react";
import { Label, LabelProps } from "reactstrap";

interface LabelBaseProps extends LabelProps {}

const LabelBase: React.FC<LabelBaseProps> = ({ children, ...rest }) => {
  return <Label {...rest}>{children}</Label>;
};

export default LabelBase;
