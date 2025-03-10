import React from "react";
import ImsCard from "../ImsCard";
import { Card } from "reactstrap";
import PropTypes from "prop-types";

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

const ImsCardExample = ({}) => {
  return (
    <div>
      <ImsCard>
        <h1> Hello Card Body</h1>
        <h1> Hello Card Body</h1>
        <h1> Hello Card Body</h1>
      </ImsCard>
      <br /> <br />
      <ImsCard
        cardProps={{
          className: "border border-0 shadow-none",
        }}
        cardHeaderProps={{
          children: (
            <React.Fragment>
              <h1> Hello Card Header</h1>
            </React.Fragment>
          ),
          className: "bg-primary",
        }}
        cardFooterProps={{
          children: (
            <React.Fragment>
              <h1> Hello Card Footer</h1>
            </React.Fragment>
          ),
          className: "bg-danger",
        }}
        cardBodyProps={{
          className: "bg-success",
        }}
      >
        <h1> Hello Card Body</h1>
        <h1> Hello Card Body</h1>
        <h1> Hello Card Body</h1>
      </ImsCard>
    </div>
  );
};

ImsCard.propTypes = {
  cardProps: PropTypes.object,
  cardHeaderProps: PropTypes.object,
  cardFooterProps: PropTypes.object,
  cardBodyProps: PropTypes.object,
  ...(Card.propTypes && Card.propTypes),
};

export default ImsCardExample;
