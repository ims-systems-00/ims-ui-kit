import classNames from "classnames";
import Button from "../Buttons/ButtonBase";
import React from "react";
import { PaginationLink } from "reactstrap";

let PaginationLinkBaseProps = Object.assign({}, PaginationLink.prototype.props);
/**
 *
 * @param {PaginationLinkBaseProps} props
 * @returns
 */

const PaginationLinkBase = ({ children, ...rest }) => {
  return (
    <Button className={classNames(`page-link ${rest.className}`, {})} {...rest}>
      {children}
    </Button>
  );
};

PaginationLinkBase.propTypes = {
  ...(PaginationLink.propTypes && PaginationLink.propTypes),
};

export default PaginationLinkBase;
