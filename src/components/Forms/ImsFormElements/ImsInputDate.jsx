import { Col, FormGroup, Label } from "reactstrap";
import ReactDatetime from "../DateTimePicker/DateTimeBase";

const ImsInputDate = ({
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
        <ReactDatetime
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
          onChange={(e) => {
            if (typeof e === "object") {
              let currentTarget = { name, value: e.format("D/M/YYYY") };
              onChange({ currentTarget });
            }
          }}
          timeFormat={false}
          dateFormat={"D/M/YYYY"}
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
