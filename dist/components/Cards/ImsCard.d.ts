import React from "react";
import { CardBaseProps } from "./CardBase";
import { CardBodyBaseProps } from "./CardBodyBase";
import { CardFooterBaseProps } from "./CardFooterBase";
import { CardHeaderBaseProps } from "./CardHeaderBase";
export interface ImsCardProps extends CardBaseProps {
    cardProps: CardBaseProps;
    cardHeaderProps: CardHeaderBaseProps;
    cardBodyProps: CardBodyBaseProps;
    cardFooterProps: CardFooterBaseProps;
}
declare const ImsCard: React.FC<ImsCardProps>;
export default ImsCard;
