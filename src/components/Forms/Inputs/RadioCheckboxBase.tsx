import React from "react";
import classNames from "classnames";
import FormGroup from "../FormGroupBase";
import Label from "./LabelBase";
import Input, { InputBaseProps } from "./InputBase";

export interface RadioCheckboxBaseProps extends InputBaseProps {
  label: string;
  mandatory?: boolean;
  unselected?: boolean;
}

const RadioCheckboxBase: React.FC<RadioCheckboxBaseProps> = ({
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

export default RadioCheckboxBase;
