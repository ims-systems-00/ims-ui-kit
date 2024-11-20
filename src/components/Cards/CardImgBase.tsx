import React from "react";
import { CardImg, CardImgProps } from "reactstrap";

export interface CardImgBaseProps extends CardImgProps {}

const CardImgBase: React.FC<CardImgBaseProps> = (props) => {
  return <CardImg {...props}>{props.children}</CardImg>;
};

export default CardImgBase;
