import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

interface ImsInputRadioBaseProps {
  label: string;
  name: string;
  values: any[];
  defaultChecked?: any;
  error?: string;
  mandatory?: boolean;
  helperText?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImsInputRadioBase: React.FC<ImsInputRadioBaseProps> = ({
  label,
  name,
  values,
  defaultChecked,
  error,
  mandatory = false,
  helperText,
  onChange = () => {},
}) => {
  return (
    <FormGroup>
      <Label style={{ fontSize: "16px" }} className="text-dark">
        {label} {mandatory ? <span className="text-danger">*</span> : ""}
      </Label>
      {values.map((value, index) => (
        <FormGroup check key={index}>
          <Input
            type="radio"
            name={name}
            value={value}
            checked={defaultChecked === value}
            onChange={onChange}
            className="mr-2"
          />
          <Label check>{value}</Label>
        </FormGroup>
      ))}
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
    </FormGroup>
  );
};

export default ImsInputRadioBase;
