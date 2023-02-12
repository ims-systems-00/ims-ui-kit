import React from "react";
import PropTypes from "prop-types";
import { CardBody } from "reactstrap";
import classNames from "classnames";

let CardBodyBaseProps = Object.assign({}, CardBody.prototype.props);

/**
 *
 * @param {CardBodyBaseProps} props
 * @returns
 */
const CardBodyBase = (props) => {
  return <CardBody {...props}>{props.children}</CardBody>;
};

CardBodyBase.propTypes = {
  ...(CardBody.propTypes && CardBody.propTypes),
};

export default CardBodyBase;
