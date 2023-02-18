import React from "react";
import { BreadcrumbItem } from "reactstrap";


let BreadcrumbItemBaseProps = Object.assign({}, BreadcrumbItem.prototype?.props);

/**
 * @param {BreadcrumbItemBaseProps} props
 * @returns
 * */


const BreadcrumbItemBase = ({ children, ...rest }) => {
  return <BreadcrumbItem {...rest}>{children}</BreadcrumbItem>;
};

BreadcrumbItemBase.propTypes = {
  ...(BreadcrumbItem.propTypes && BreadcrumbItem.propTypes),
};

export default BreadcrumbItemBase;
