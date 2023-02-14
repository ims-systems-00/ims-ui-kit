import classNames from "classnames";
import React from "react";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import PropTypes from "prop-types";

let ImsInputTextProps = Object.assign({}, Input.prototype.props);

/**
 * @param {ImsInputTextProps} props
 * @returns
 */

const ImsInputText = ({
  leftIcon = "",
  rightIcon = "",
  leftIconStyle = "text-secondary",
  rightIconStyle = "text-secondary",
  label,
  type = "text",
  mandatory = false,
  error = "",
  valid = false,
  onChange,
  labelCol = "12",
  inputCol = "12",
  value,
  ...rest
}) => {
  const textInputRef = React.useRef(null);
  const [focused, setFocused] = React.useState(false);
  const handleFocus = (value) => {
    setFocused(value);
  };
  return (
    <>
      <Row>
        {label && (
          <Col sm={labelCol}>
            <Label>
              {label} {mandatory ? <span className="text-danger">*</span> : ""}
            </Label>
          </Col>
        )}
        <Col sm={inputCol}>
          <FormGroup>
            <div
              ref={textInputRef}
              onClick={() => {
                textInputRef.current.querySelector("input").focus();
                console.log("clicked");
              }}
              className={classNames(
                "ims-input d-flex align-items-center px-2",
                {
                  "ims-input-focused": focused,
                  "ims-input-error": error,
                  "ims-input-success": valid && !error,
                }
              )}
            >
              {leftIcon && (
                <i
                  className={classNames(`
                ${leftIcon}
                ${leftIconStyle}
                `)}
                ></i>
              )}
              <Input
                className="border border-0 ims-text-input px-2"
                onChange={(e) => onChange(e)}
                onFocus={() => handleFocus(true)}
                onBlur={() => handleFocus(false)}
                type={type}
                value={value}
                {...rest}
              />
              {rightIcon && (
                <i
                  className={classNames(`
                  ${rightIcon}
                  ${rightIconStyle}
                  `)}
                ></i>
              )}
            </div>
            {error && <label className="text-danger">{error}</label>}
          </FormGroup>
        </Col>
      </Row>
    </>
  );
};

ImsInputText.propTypes = {
  ...(ImsInputTextProps && ImsInputTextProps),
  /** Left Icon */
  leftIcon: PropTypes.string,
  /** Right Icon */
  rightIcon: PropTypes.string,
  /** Left Icon Style */
  leftIconStyle: PropTypes.string,
  /** Right Icon Style */
  rightIconStyle: PropTypes.string,
  /** Label */
  label: PropTypes.string,
  /** Type */
  type: PropTypes.string,
  /** Mandatory */
  mandatory: PropTypes.bool,
  /** Error */
  error: PropTypes.string,
  /** Valid */
  valid: PropTypes.bool,
  /** On Change */
  onChange: PropTypes.func,
  /** Label Column */
  labelCol: PropTypes.string,
  /** Input Column */
  inputCol: PropTypes.string,
  /** Value */
  value: PropTypes.string,
  /** Placeholder */
  placeholder: PropTypes.string,

  /** Input Props */
  ...Input.propTypes,
};

export default ImsInputText;
