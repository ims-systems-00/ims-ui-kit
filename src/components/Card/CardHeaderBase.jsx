import React from "react";
import PropTypes from "prop-types";
import { CardHeader } from "reactstrap";
import classNames from "classnames";

let CardHeaderBaseProps = Object.assign({}, CardHeader.prototype.props);

/**
 *
 * @param {CardHeaderBaseProps} props
 * @returns
 */
const CardHeaderBase = (props) => {
  return <CardHeader {...props}>{props.children}</CardHeader>;
};

CardHeaderBase.propTypes = {
  ...(CardHeader.propTypes && CardHeader.propTypes),
};

export default CardHeaderBase;
