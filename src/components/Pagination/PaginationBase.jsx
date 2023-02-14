import classNames from "classnames";
import React from "react";
import { Pagination } from "reactstrap";
import PropTypes from "prop-types";

let PaginationBaseProps = Object.assign(
  {
    separated: false,
  },
  Pagination.prototype.props
);
/**
 *
 * @param {PaginationBaseProps} props
 * @returns
 */

const PaginationBase = ({ children, separated, ...rest }) => {
  return (
    <Pagination
      className={classNames(rest.className, {
        "pagination-separated": separated,
      })}
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
