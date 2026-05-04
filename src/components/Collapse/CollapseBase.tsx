import React from "react";
import { Collapse, CollapseProps } from "reactstrap";

interface CollapseBaseProps extends CollapseProps {}

const CollapseBase: React.FC<CollapseBaseProps> = ({ children, ...rest }) => {
  return <Collapse {...rest}>{children}</Collapse>;
};

export default CollapseBase;
