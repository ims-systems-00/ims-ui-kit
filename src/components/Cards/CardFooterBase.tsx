import React from "react";
import { CardFooter, CardFooterProps } from "reactstrap";

export interface CardFooterBaseProps extends CardFooterProps {}

const CardFooterBase: React.FC<CardFooterBaseProps> = (props) => {
  return <CardFooter {...props}>{props.children}</CardFooter>;
};

export default CardFooterBase;
