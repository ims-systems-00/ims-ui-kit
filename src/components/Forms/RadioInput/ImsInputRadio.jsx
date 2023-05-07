import classNames from "classnames";
import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import PropTypes from "prop-types";

let ImsInputRadioProps = Object.assign({}, Input.prototype.props);

/**
 *
 * @param {ImsInputRadioProps} props
 * @returns
 */

const ImsRadioCheckbox = ({
  label,
  mandatory = false,
  unselected = false,
  ...rest
}) => {
  return (
    <>
      <FormGroup
        check
        className={classNames("", {
          "unselected-radio": unselected,
        })}
      >
        <Input type="radio" {...rest} />{" "}
        <Label
          style={{
            fontSize: "16px",
          }}
          className="text-dark"
          check
        >
          {label} {mandatory ? <span className="text-danger">*</span> : ""}
        </Label>
      </FormGroup>
    </>
  );
};

ImsRadioCheckbox.propTypes = {
  ...(ImsInputRadioProps || {}),
  /** Label for the input */
  label: PropTypes.string,
  /** Mandatory input */
  mandatory: PropTypes.bool,
  /** Unselected checkbox */
  unselected: PropTypes.bool,
  /** Input Props */
  ...Input.propTypes,
};

export default ImsRadioCheckbox;
