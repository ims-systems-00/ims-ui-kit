import React from "react";
import { CardSubtitle, CardSubtitleProps } from "reactstrap";

export interface CardSubtitleBaseProps extends CardSubtitleProps {}

const CardSubtitleBase: React.FC<CardSubtitleBaseProps> = (props) => {
  return <CardSubtitle {...props}>{props.children}</CardSubtitle>;
};

export default CardSubtitleBase;
