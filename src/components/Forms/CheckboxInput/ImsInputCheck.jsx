import classNames from "classnames";
import React from "react";
import { FormGroup, Input, Label} from "reactstrap";
import PropTypes from "prop-types";

let ImsInputCheckProps = Object.assign({}, Input.prototype.props);

/**
 *
 * @param {ImsInputCheckProps} props
 * @returns
 */

const ImsCheckBox = ({
  label,
  mandatory = false,
  onChange,
  unselected = false,
  ...rest
}) => {
  return (
    <>
      <FormGroup
        check
        className={classNames("", {
          "unselected-checkbox": unselected,
        })}
      >
        <Input type="checkbox" {...rest} />{" "}
        <Label check>
          {label} {mandatory ? <span className="text-danger">*</span> : ""}
        </Label>
      </FormGroup>
    </>
  );
};

ImsCheckBox.propTypes = {
  ...(ImsInputCheckProps || {}),
  /** Label for the input */
  label: PropTypes.string,
  /** Mandatory input */
  mandatory: PropTypes.bool,
  /** Unselected checkbox */
  unselected: PropTypes.bool,
  /** Input Props */
  ...Input.propTypes,
};

export default ImsCheckBox;
