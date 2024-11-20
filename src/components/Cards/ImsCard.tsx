import React from "react";
import Card, { CardBaseProps } from "./CardBase";
import CardBody, { CardBodyBaseProps } from "./CardBodyBase";
import CardFooter, { CardFooterBaseProps } from "./CardFooterBase";
import CardHeader, { CardHeaderBaseProps } from "./CardHeaderBase";

export interface ImsCardProps extends CardBaseProps {
  cardProps: CardBaseProps;
  cardHeaderProps: CardHeaderBaseProps;
  cardBodyProps: CardBodyBaseProps;
  cardFooterProps: CardFooterBaseProps;
}

const ImsCard: React.FC<ImsCardProps> = ({
  children,
  cardProps,
  cardHeaderProps,
  cardFooterProps,
  cardBodyProps,
}) => {
  return (
    <Card {...cardProps}>
      {cardHeaderProps?.children && (
        <CardHeader {...cardHeaderProps}>
          {cardHeaderProps?.children}
        </CardHeader>
      )}
      <CardBody {...cardBodyProps}>{children}</CardBody>
      {cardFooterProps?.children && (
        <CardFooter {...cardFooterProps}>
          {cardFooterProps?.children}
        </CardFooter>
      )}
    </Card>
  );
};

export default ImsCard;
