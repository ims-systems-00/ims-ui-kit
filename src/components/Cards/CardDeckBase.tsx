import React from "react";
import { CardDeck, CardDeckProps } from "reactstrap";

export interface CardDeckBaseProps extends CardDeckProps {}

const CardDeckBase: React.FC<CardDeckBaseProps> = (props) => {
  return <CardDeck {...props}>{props.children}</CardDeck>;
};

export default CardDeckBase;
