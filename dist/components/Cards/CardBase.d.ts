import React from "react";
import { CardProps } from "reactstrap";
export interface CardBaseProps extends CardProps {
    variant?: string;
    hover?: boolean;
}
declare const CardBase: React.FC<CardBaseProps>;
export default CardBase;
