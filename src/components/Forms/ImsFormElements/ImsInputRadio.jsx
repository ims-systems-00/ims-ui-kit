import classNames from "classnames";
import React from "react";
import { Col, FormGroup, Label } from "reactstrap";
import ImsInputRadioBase from "../RadioInput/ImsInputRadio";

const ImsInputRadio = ({
  label,
  onChange,
  values,
  unselected,
  defaultChecked,
  verticalAlign = false,
  error,
  helperText,
  ...rest
}) => {
  return (
    <React.Fragment>
      <FormGroup check row>
        <Col sm="12">
          <Label
            style={{
              fontSize: "16px",
            }}
            className="text-dark"
            sm="12"
          >
            {label}
          </Label>
        </Col>
        <Col sm="12">
          <div
            className={classNames("", {
              "d-flex flex-wrap": !verticalAlign,
            })}
          >
            {values &&
              values?.map((value, index) => (
                <span
                  key={index}
                  className={classNames("", {
                    "mr-3 me-3": !verticalAlign,
                  })}
                >
                  <ImsInputRadioBase
                    label={value}
                    onChange={onChange}
                    unselected={unselected}
                    defaultChecked={
                      defaultChecked && defaultChecked === value ? true : false
                    }
                    {...rest}
                  />
                </span>
              ))}
          </div>
        </Col>
        <Col sm="12">
          <Select {...rest} onChange={handleChange} />

          {error && (
            <p>
              <label className="text-danger">
                <small>{error}</small>
              </label>
            </p>
          )}
          {helperText && <small>{helperText}</small>}
        </Col>
      </FormGroup>
    </React.Fragment>
  );
};

export default ImsInputRadio;
