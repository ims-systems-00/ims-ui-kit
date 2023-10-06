import ReactDatetime from "react-datetime";
import { Col, FormGroup, Label } from "reactstrap";

const ImsInputTime = ({
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
          <ReactDatetime
            dateFormat={false}
            timeIntervals={30}
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
