import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import { DropdownToggle } from "reactstrap";

let DropdownToogleBaseProps = Object.assign(
  {
    startIcon: "",
    endIcon: "",
    caret: true,
  },
  DropdownToggle.prototype.props
);

/**
 *
 * @param {DropdownToogleBaseProps} props
 * @returns
 */

const DropdownToogleBase = ({ caret, ...props }) => {
  return (
    <>
      <DropdownToggle
        caret={props.startIcon || props.endIcon ? false : props.caret}
        {...props}
      >
        {props.startIcon && (
          <i className={classNames(props.startIcon, "me-2")}></i>
        )}
        {props.children}
        {props.endIcon && <i className={classNames(props.endIcon, "ms-2")}></i>}
      </DropdownToggle>
    </>
  );
};

DropdownToogleBase.propTypes = {
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  caret: PropTypes.bool,
  ...(DropdownToggle.propTypes && DropdownToggle.propTypes),
};

export default DropdownToogleBase;
