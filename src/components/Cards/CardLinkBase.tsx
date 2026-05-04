import React from "react";
import { CardLink, CardLinkProps } from "reactstrap";

export interface CardLinkBaseProps extends CardLinkProps {}

const CardLinkBase: React.FC<CardLinkBaseProps> = (props) => {
  return <CardLink {...props}>{props.children}</CardLink>;
};

export default CardLinkBase;
