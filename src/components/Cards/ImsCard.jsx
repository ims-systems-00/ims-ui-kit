import Card from "./CardBase";
import CardBody from "./CardBodyBase";
import CardFooter from "./CardFooterBase";
import CardHeader from "./CardHeaderBase";
import Proptype from "prop-types";

let ImsCardProps = Object.assign(
  {
    cardProps: {
      type: Object,
      default: () => {},
    },
    cardHeaderProps: {
      type: Object,
      default: () => {},
    },
    cardFooterProps: {
      type: Object,
      default: () => {},
    },
    cardBodyProps: {
      type: Object,
      default: () => {},
    },
  },
  Card.prototype.props
);

/**
 *
 * @param {ImsCardProps} props
 * @returns
 */

const ImsCard = ({
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

ImsCard.propTypes = {
  ...(Card.propTypes && Card.propTypes),
  cardProps: Proptype.object,
  cardHeaderProps: Proptype.object,
  cardFooterProps: Proptype.object,
  cardBodyProps: Proptype.object,
};

export default ImsCard;
