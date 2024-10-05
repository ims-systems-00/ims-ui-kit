import React from "react";
import classNames from "classnames";
import Col from "../../Grid/ColBase";
import FormGroup from "../FormGroupBase";
import Label from "../Inputs/LabelBase";
import Input, { InputBaseProps } from "../Inputs/InputBase";

interface ImsInputCheckProps extends InputBaseProps {
  label: string;
  mandatory?: boolean;
  unselected?: boolean;
  error?: string;
  helperText?: string;
}

const ImsInputCheck: React.FC<ImsInputCheckProps> = ({
  label,
  mandatory = false,
  unselected = false,
  error,
  helperText,
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
        <Col md="12">
          <Input type="checkbox" {...rest} />{" "}
          <Label
            style={{
              fontSize: "16px",
            }}
            className="text-dark"
            check
          >
            {label} {mandatory ? <span className="text-danger">*</span> : ""}
          </Label>
        </Col>
        <Col sm="12">
          {error && (
            <label className="text-danger">
              <small>{error}</small>
            </label>
          )}
          {helperText && (
            <label>
              {" "}
              <small>{helperText}</small>
            </label>
          )}
        </Col>
      </FormGroup>
    </>
  );
};

export default ImsInputCheck;
