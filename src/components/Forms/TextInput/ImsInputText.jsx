import classNames from "classnames";
import React from "react";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

const ImsInputText = ({
  leftIcon = "",
  rightIcon = "",
  leftIconStyle = "text-secondary",
  rightIconStyle = "text-secondary",
  label,
  type = "text",
  mandatory = false,
  error = false,
  valid = false,
  onChange,
  labelCol = "12",
  inputCol = "12",
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

export default ImsInputText;
