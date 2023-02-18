import { Col, FormGroup, Label } from "reactstrap";

const ImsFormSectionDivider = ({ label, dividerText, isHorizontal }) => {
  return (
    <>
      <FormGroup row>
        <Col sm="12">
          <Label className="text-success">{label}</Label>
        </Col>
        <Col sm="12">
          <h5 className="form-control border-0 text-warning">{dividerText}</h5>
        </Col>
      </FormGroup>
    </>
  );
};

export default ImsFormSectionDivider;
