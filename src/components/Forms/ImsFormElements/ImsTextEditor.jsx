import TextEditor from "../../TextEditor/Index";
import { Col, FormGroup, Label } from "reactstrap";

const ImsTextEditor = ({
  label,
  error,
  name,
  linkGenerator,
  handleUpload,
  onChange = () => {},
  helperText,
  ...rest
}) => {
  return (
    <FormGroup row>
      {label && (
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
      )}
      <Col sm="12">
        <TextEditor
          onDataStructureChange={(draftDataStructure) =>
            onChange({ currentTarget: { name, value: draftDataStructure } })
          }
          linkGeneratorFn={linkGenerator}
          handleUpload={handleUpload}
          {...rest}
        />

        {error && (
          <p>
            <label className="text-danger">
              <small>{error}</small>
            </label>
          </p>
        )}
        {helperText && <small>{helperText}</small>}
      </Col>
    </FormGroup>
  );
};

export default ImsTextEditor;
