import React from "react";
import { Col, ColProps } from "reactstrap";

interface ColBaseProps extends ColProps {}

const ColBase: React.FC<ColBaseProps> = ({ children, ...rest }) => {
  return <Col {...rest}>{children}</Col>;
};

export default ColBase;
