import React from "react";
import { Row, RowProps } from "reactstrap";

interface RowBaseProps extends RowProps {}

const RowBase: React.FC<RowBaseProps> = ({ children, ...rest }) => {
  return <Row {...rest}>{children}</Row>;
};

export default RowBase;
