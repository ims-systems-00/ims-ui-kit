import React from "react";
import { CardTitle, CardTitleProps } from "reactstrap";

export interface CardTitleBaseProps extends CardTitleProps {}

const CardTitleBase: React.FC<CardTitleBaseProps> = (props) => {
  return <CardTitle {...props}>{props.children}</CardTitle>;
};

export default CardTitleBase;
