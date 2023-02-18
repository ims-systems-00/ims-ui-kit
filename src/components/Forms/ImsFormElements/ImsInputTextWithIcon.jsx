import { Col, FormGroup, Label } from "reactstrap";
import Input from "../TextInput/InputBase";
import InputGroup from "../TextInput/InputGroupBase";
import InputGroupText from "../TextInput/InputGroupTextBase";

const ImsInputTextWithIcon = ({
  label,
  onChange,
  icon,
  type = "text",
  mandatory = false,
  options,
  error,
  defaultOpt,
  ...props
}) => {
  console.log("ImsInputTextWithIcon", icon);
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
            {options ? (
              <Input type="select" onChange={(e) => onChange(e)} {...props}>
                <option value={"undefined"}>{defaultOpt}</option>
                {options &&
                  options.map((item, i) => (
                    <option key={item.value} value={item.value}>
                      {item.placeHolder}
                    </option>
                  ))}
              </Input>
            ) : (
              <Input type={type} onChange={(e) => onChange(e)} {...props} />
            )}
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
