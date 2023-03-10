import { Col, FormGroup, Label } from "reactstrap";
import Select from "../ImsSelectInput/ReactSelectBase";

const ImsInputSelect = ({
  label,
  error,
  name,
  onChange = () => {},
  mandatory = false,
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
          <Label>
            {label} {mandatory ? <span className="text-danger">*</span> : ""}
          </Label>
        </Col>
        <Col sm="12">
          <Select {...rest} onChange={handleChange} />
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

export default ImsInputSelect;
