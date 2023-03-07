import classNames from "classnames";
import React from "react";
import { Pagination } from "reactstrap";
import PropTypes from "prop-types";

let PaginationBaseProps = Object.assign(
  {
    separated: PropTypes.bool,
  },
  Pagination.prototype.props
);
/**
 *
 * @param {PaginationBaseProps} props
 * @returns
 */

const PaginationBase = ({ children, ...rest }) => {
  return (
    <Pagination
      className={classNames(`pagination-separated ${rest.className}`, {})}
      {...rest}
    >
      {children}
    </Pagination>
  );
};

PaginationBase.propTypes = {
  separated: PropTypes.bool,
  ...(Pagination.propTypes && Pagination.propTypes),
};

export default PaginationBase;
