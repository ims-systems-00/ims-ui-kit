import React from "react";
import { CardImgOverlay, CardImgOverlayProps } from "reactstrap";

export interface CardImgOverlayBaseProps extends CardImgOverlayProps {}

const CardImgOverlayBase: React.FC<CardImgOverlayBaseProps> = (props) => {
  return <CardImgOverlay {...props}>{props.children}</CardImgOverlay>;
};

export default CardImgOverlayBase;
