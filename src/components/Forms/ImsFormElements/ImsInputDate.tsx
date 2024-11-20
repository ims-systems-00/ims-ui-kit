import React from "react";
import moment, { Moment } from "moment";
import Col from "../../Grid/ColBase";
import FormGroup from "../FormGroupBase";
import Label from "../Inputs/LabelBase";
import Datetime, { DateTimeBaseProps } from "../Inputs/DateTimeBase";

type OnChangeParams =
  | React.FormEvent<HTMLInputElement>
  | Event
  | string
  | Moment;

interface ImsInputDateProps extends DateTimeBaseProps {
  label: string;
  name: string;
  value: string;
  error?: string;
  mandatory?: boolean;
  disabled?: boolean;
  helperText?: string;
  onChange: (e: OnChangeParams) => void;
}

const ImsInputDate: React.FC<ImsInputDateProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  mandatory = false,
  disabled,
  helperText,
}) => {
  return (
    <FormGroup row>
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
      <Col sm="12">
        <Datetime
          inputProps={{
            disabled,
            placeholder: "Select date",
            className: "form-control",
            value,
            name,
            // this onchange is direct input ...
            onChange,
            autoComplete: "off",
          }}
          // this onchange is for calender ...
          onChange={(e: Moment | string) => {
            if (moment.isMoment(e)) {
              let formattedDate = e.format("D/M/YYYY");
              let inputElement = document.createElement("input");
              let inputChangeEvent = new Event("change");
              inputElement.name = name;
              inputElement.value = formattedDate;
              inputElement.dispatchEvent(inputChangeEvent);

              onChange(inputChangeEvent);
            }
          }}
          timeFormat={false}
          dateFormat={"D/M/YYYY"}
          closeOnSelect
        />

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
  );
};

export default ImsInputDate;
