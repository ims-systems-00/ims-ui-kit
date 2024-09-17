import React from "react";
import Col from "../../Grid/ColBase";
import FormGroup from "../FormGroupBase";
import Label from "../Inputs/LabelBase";
import FileDropZone, {
  FileDropZoneBaseProps,
} from "../Inputs/FileDropZoneBase";

interface ImsInputDropZoneProps extends FileDropZoneBaseProps {
  label: string;
  error?: string;
  name: string;
  onChange: (e: any) => void;
  noMultiple?: boolean;
  onLoad: (files: any) => void;
}

const ImsInputDropZone: React.FC<ImsInputDropZoneProps> = ({
  label,
  error,
  onLoad,
  name,
  onChange,
  noMultiple,
  ...rest
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
          {label}
        </Label>
      </Col>
      <Col sm="12">
        <FileDropZone
          {...rest}
          name={name}
          noMultiple={noMultiple}
          onSelected={(files) => onLoad(files)}
        />
      </Col>
    </FormGroup>
  );
};

export default ImsInputDropZone;
