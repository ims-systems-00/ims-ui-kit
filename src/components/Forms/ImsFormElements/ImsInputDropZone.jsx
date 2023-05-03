import { Col, FormGroup, Label } from "reactstrap";
import FileDropZone from "../FileDropZone/FileDropZone";

const ImsInputDropZone = ({
  label,
  error,
  clearAll = false,
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
          clearAll={clearAll}
          noMultiple={noMultiple}
          onLoad={(files) => onLoad(files)}
        />
      </Col>
    </FormGroup>
  );
};

export default ImsInputDropZone;
