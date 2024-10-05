import React from "react";
import Col from "../../Grid/ColBase";
import FormGroup from "../FormGroupBase";
import Label from "../Inputs/LabelBase";
import Select, { SelectBaseProps } from "../Inputs/SelectBase";

interface ImsInputSelectProps extends SelectBaseProps {
  label: string;
  error?: string;
  name: string;
  mandatory?: boolean;
  helperText?: string;
  sideBtn?: React.ReactNode;
  onChange: (e: any) => void;
}

const ImsInputSelect: React.FC<ImsInputSelectProps> = ({
  label,
  error,
  name,
  onChange = () => {},
  mandatory = false,
  helperText,
  sideBtn,
  ...rest
}) => {
  const handleChange = (changes: unknown) => {
    if (!changes) {
      let currentTarget = {
        name,
        value: [],
      };
      onChange({ currentTarget });
    } else if (Array.isArray(changes)) {
      let currentTarget = {
        name,
        value: changes, //changes.map(item => item.value)
      };
      onChange({ currentTarget });
    } else {
      let currentTarget = {
        name,
        value: changes, //changes.value
      };
      onChange({ currentTarget });
    }
  };

  return (
    <>
      <FormGroup row>
        <Col sm="12" className="d-flex">
          <Label
            style={{
              fontSize: "16px",
            }}
            className="text-dark"
          >
            {label} {mandatory ? <span className="text-danger">*</span> : ""}{" "}
            {sideBtn && sideBtn}
          </Label>
        </Col>
        <Col sm="12">
          <Select {...rest} onChange={handleChange} />

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

export default ImsInputSelect;
