import React from "react";
import { UncontrolledCollapse, UncontrolledCollapseProps } from "reactstrap";

interface UncontrolledCollapseBaseProps extends UncontrolledCollapseProps {}

const UncontrolledCollapseBase: React.FC<UncontrolledCollapseBaseProps> = ({
  children,
  ...rest
}) => {
  return <UncontrolledCollapse {...rest}>{children}</UncontrolledCollapse>;
};

export default UncontrolledCollapseBase;
