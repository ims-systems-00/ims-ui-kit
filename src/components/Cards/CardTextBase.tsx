import React from "react";
import { CardText, CardTextProps } from "reactstrap";

export interface CardTextBaseProps extends CardTextProps {}

const CardTextBase: React.FC<CardTextBaseProps> = (props) => {
  return <CardText {...props}>{props.children}</CardText>;
};

export default CardTextBase;
