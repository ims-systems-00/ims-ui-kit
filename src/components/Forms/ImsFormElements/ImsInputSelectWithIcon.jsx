import { Col, FormGroup, Label } from "reactstrap";
import Select from "../ImsSelectInput/ReactSelectBase";
import InputGroup from "../TextInput/InputGroupBase";
import InputGroupText from "../TextInput/InputGroupTextBase";

const ImsInputSelectWithIcon = ({
  label,
  error,
  icon,
  name,
  onChange = () => {},
  mandatory = false,
  helperText,
  ...rest
}) => {
  const handleChange = (changes) => {
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
