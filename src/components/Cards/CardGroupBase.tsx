import React from "react";
import { CardGroup, CardGroupProps } from "reactstrap";

export interface CardGroupBaseProps extends CardGroupProps {}

const CardGroupBase: React.FC<CardGroupBaseProps> = (props) => {
  return <CardGroup {...props}>{props.children}</CardGroup>;
};

export default CardGroupBase;
