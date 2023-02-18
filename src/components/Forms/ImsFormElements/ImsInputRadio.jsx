import { Col, FormGroup, Label } from "reactstrap";
import ImsInputRadioBase from "../RadioInput/ImsInputRadio";

const ImsInputRadio = ({
  label,
  onChange,
  values,
  unselected,
  defaultChecked,
  ...rest
}) => {
  return (
    <>
      <FormGroup check row>
        <Col sm="12">
          <Label sm="2">{label}</Label>
        </Col>
        <Col sm="12">
          {values &&
            values?.map((value, index) => (
              <span key={index}>
                <ImsInputRadioBase
                  label={value}
                  onChange={onChange}
                  unselected={unselected}
                  defaultChecked={
                    defaultChecked && defaultChecked === value ? true : false
                  }
                  {...rest}
                />
                <br />
              </span>
            ))}
        </Col>
      </FormGroup>
    </>
  );
};

export default ImsInputRadio;
