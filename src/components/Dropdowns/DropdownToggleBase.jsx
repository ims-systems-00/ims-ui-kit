import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import { DropdownToggle } from "reactstrap";

let DropdownToogleBaseProps = Object.assign({}, DropdownToggle.prototype.props);

/**
 *
 * @param {DropdownToogleBaseProps} props
 * @returns
 */

const DropdownToogleBase = ({ ...props }) => {
  return (
    <>
      <DropdownToggle {...props}>
        {props.startIcon && (
          <i className={classNames(props.startIcon, "me-2")}></i>
        )}
        {props.children}
      </DropdownToggle>
    </>
  );
};

DropdownToogleBase.propTypes = {
  ...(DropdownToggle.propTypes && DropdownToggle.propTypes),
};

export default DropdownToogleBase;
