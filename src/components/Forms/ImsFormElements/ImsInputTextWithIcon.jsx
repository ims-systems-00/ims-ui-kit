import { Col, FormGroup, Label } from "reactstrap";
import InputGroup from "../TextInput/InputGroupBase";
import InputGroupText from "../TextInput/InputGroupTextBase";

const ImsInputTextWithIcon = ({
  label,
  onChange,
  icon,
  type = "text",
  mandatory = false,
  error,
  defaultOpt,
  ...props
}) => {
  return (
    <>
      <FormGroup row>
        {label && (
          <Col sm="12">
            <Label>
              {label} {mandatory ? <span className="text-danger">*</span> : ""}
            </Label>
          </Col>
        )}
        <Col sm="12">
          <InputGroup>
            <InputGroupText>
              <i className={`${icon}`} />
            </InputGroupText>
          </InputGroup>
          {error && (
            <label className="text-danger">
              <small>{error}</small>
            </label>
          )}
        </Col>
      </FormGroup>
    </>
  );
};

export default ImsInputTextWithIcon;
