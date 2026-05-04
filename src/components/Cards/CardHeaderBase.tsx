import React from "react";
import { CardHeader, CardHeaderProps } from "reactstrap";

export interface CardHeaderBaseProps extends CardHeaderProps {}

const CardHeaderBase: React.FC<CardHeaderBaseProps> = (props) => {
  return <CardHeader {...props}>{props.children}</CardHeader>;
};

export default CardHeaderBase;
