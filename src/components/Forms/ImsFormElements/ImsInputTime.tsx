import React from "react";
import Datetime, { DateTimeBaseProps } from "../Inputs/DateTimeBase";
import Col from "../../Grid/ColBase";
import FormGroup from "../FormGroupBase";
import Label from "../Inputs/LabelBase";

interface ImsInputTimeProps extends DateTimeBaseProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
  error?: string;
  disabled?: boolean;
  helperText?: string;
}

const ImsInputTime: React.FC<ImsInputTimeProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  disabled,
  helperText,
}) => {
  return (
    <>
      <FormGroup row>
        <Col sm="12">
          <Label
            style={{
              fontSize: "16px",
            }}
            className="text-dark"
          >
            {label}
          </Label>
        </Col>
        <Col sm="12">
          <Datetime
            dateFormat={false}
            timeFormat="HH:mm"
            inputProps={{
              disabled,
              className: "form-control",
              placeholder: "Select a time",
              value,
              name,
              // this onchange is direct input ...
              onChange,
              autoComplete: "off",
            }}
            // this onchange is for calender ...
            onChange={(e) => {
              if (typeof e === "object") {
                let currentTarget = { name, value: e.format("HH:mm") };
                onChange({ currentTarget });
              }
            }}
            className="text-dark"
          />
          {error && (
            <label className="text-danger">
              <small>{error}</small>
            </label>
          )}
          {helperText && (
            <label>
              <small>{helperText}</small>
            </label>
          )}
        </Col>
      </FormGroup>
    </>
  );
};

export default ImsInputTime;
