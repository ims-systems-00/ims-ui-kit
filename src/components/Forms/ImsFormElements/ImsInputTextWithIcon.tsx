import React from "react";
import Col from "../../Grid/ColBase";
import FormGroup from "../FormGroupBase";
import Label from "../Inputs/LabelBase";
import InputGroup, { InputGroupBaseProps } from "../Inputs/InputGroupBase";
import InputGroupText from "../Inputs/InputGroupTextBase";

interface ImsInputTextWithIconProps extends InputGroupBaseProps {
  label: string;
  icon: string;
  type?: string;
  mandatory?: boolean;
  error?: string;
  defaultOpt?: string;
  helperText?: string;
}

const ImsInputTextWithIcon: React.FC<ImsInputTextWithIconProps> = ({
  label,
  icon,
  type = "text",
  mandatory = false,
  error,
  defaultOpt,
  helperText,
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
          <InputGroup {...rest}>
            <InputGroupText>
              <i className={`${icon}`} />
            </InputGroupText>
          </InputGroup>
          {error && (
            <label className="text-danger">
              <small>{error}</small>
            </label>
          )}
          {helperText && (
            <label className="">
              <small>{helperText}</small>
            </label>
          )}
        </Col>
      </FormGroup>
    </>
  );
};

export default ImsInputTextWithIcon;
