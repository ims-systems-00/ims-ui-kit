import React from "react";
import Col from "../../Grid/ColBase";
import FormGroup from "../FormGroupBase";
import Label from "../Inputs/LabelBase";
import Select, { SelectBaseProps } from "../Inputs/SelectBase";
import InputGroup from "../Inputs/InputGroupBase";
import InputGroupText from "../Inputs/InputGroupTextBase";

interface ImsInputSelectWithIconProps extends SelectBaseProps {
  label: string;
  error?: string;
  icon: string;
  name: string;
  mandatory?: boolean;
  helperText?: string;
  onChange: (e: any) => void;
}

const ImsInputSelectWithIcon: React.FC<ImsInputSelectWithIconProps> = ({
  label,
  error,
  icon,
  name,
  onChange = () => {},
  mandatory = false,
  helperText,
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
          <InputGroup>
            <InputGroupText>
              <i className={`${icon}`} />
            </InputGroupText>
            <Select {...rest} onChange={handleChange} />
          </InputGroup>

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

export default ImsInputSelectWithIcon;
