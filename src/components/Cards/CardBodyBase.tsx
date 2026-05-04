import React from "react";
import { CardBody, CardBodyProps } from "reactstrap";

export interface CardBodyBaseProps extends CardBodyProps {}

const CardBodyBase: React.FC<CardBodyBaseProps> = (props) => {
  return <CardBody {...props}>{props.children}</CardBody>;
};

export default CardBodyBase;
