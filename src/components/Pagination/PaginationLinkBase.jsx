import classNames from "classnames";
import React from "react";
import { PaginationLink } from "reactstrap";

let PaginationLinkBaseProps = Object.assign({}, PaginationLink.prototype.props);
/**
 *
 * @param {PaginationLinkBaseProps} props
 * @returns
 */

const PaginationLinkBase = ({ children, link, ...rest }) => {
  if (link) {
    //in case of react router, we need to send Link tag as children
    return <span className="page-link">{children}</span>;
  } else {
    return <PaginationLink {...rest}>{children}</PaginationLink>;
  }
};

PaginationLinkBase.propTypes = {
  ...(PaginationLink.propTypes && PaginationLink.propTypes),
};

export default PaginationLinkBase;
