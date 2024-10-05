import React from "react";
import { CardColumns, CardColumnsProps } from "reactstrap";

export interface CardColumnsBaseProps extends CardColumnsProps {}

const CardColumnsBase: React.FC<CardColumnsBaseProps> = (props) => {
  return <CardColumns {...props}>{props.children}</CardColumns>;
};

export default CardColumnsBase;
