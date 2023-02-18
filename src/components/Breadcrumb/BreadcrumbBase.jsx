import React from "react";
import { Breadcrumb } from "reactstrap";

let BreadcrumbBaseProps = Object.assign({}, Breadcrumb.prototype?.props);

/**
 * @param {BreadcrumbBaseProps} props
 * @returns
 * */

const BreadcrumbBase = ({ children, ...rest }) => {
  return <Breadcrumb {...rest}>{children}</Breadcrumb>;
};

BreadcrumbBase.propTypes = {
  ...(Breadcrumb.propTypes && Breadcrumb.propTypes),
};

export default BreadcrumbBase;
