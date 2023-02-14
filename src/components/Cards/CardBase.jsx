import React from "react";
import PropTypes from "prop-types";
import { Card } from "reactstrap";
import classNames from "classnames";

let CardBaseProps = Object.assign({}, Card.prototype.props);

/**
 *
 * @param {CardBaseProps} props
 * @returns
 */
const CardBase = (props) => {
  return <Card {...props}>{props.children}</Card>;
};

CardBase.propTypes = {
  ...(Card.propTypes && Card.propTypes),
};

export default CardBase;
