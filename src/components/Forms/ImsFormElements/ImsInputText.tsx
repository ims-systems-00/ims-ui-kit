import React from "react";
import Col from "../../Grid/ColBase";
import FormGroup from "../FormGroupBase";
import Label from "../Inputs/LabelBase";
import Input, { InputBaseProps } from "../Inputs/InputBase";

export interface ImsInputTextProps extends InputBaseProps {
  leftIcon?: string;
  rightIcon?: string;
  leftIconStyle?: string;
  rightIconStyle?: string;
  label?: string;
  mandatory?: boolean;
  error?: string;
  helperText?: string;
  valid?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelCol?: string;
  inputCol?: string;
  value?: string;
  placeholder?: string;
}

const ImsInputText: React.FC<ImsInputTextProps> = ({
  label,
  mandatory = false,
  error = "",
  feedbackText = "",
  helperText = "",
  ...rest
}) => {
  return (
    <>
      <FormGroup row>
        {label && (
          <Col sm="12">
            <Label
              style={{
                fontSize: "16px",
              }}
              className="text-dark"
            >
              {label} {mandatory ? <span className="text-danger">*</span> : ""}
            </Label>
          </Col>
        )}
        <Col sm="12">
          <Input invalid={error ? true : false} {...rest} />

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

export default ImsInputText;
