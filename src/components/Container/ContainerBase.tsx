import React from "react";
import { Container, ContainerProps } from "reactstrap";

interface ContainerBaseProps extends ContainerProps {}

const ContainerBase: React.FC<ContainerBaseProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default ContainerBase;
