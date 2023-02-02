import React from "react";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

const ImsInputText = ({
  label,
  type = "text",
  mandatory = false,
  error,
  onChange,
  labelCol = "12",
  inputCol = "12",
  ...rest
}) => {
  return (
    <>
      <Row>
        {label && (
          <Col sm={labelCol}>
            <Label>
              {label} {mandatory ? <span className="text-danger">*</span> : ""}
            </Label>
          </Col>
        )}
        <Col sm={inputCol}>
          <FormGroup>
            <Input onChange={(e) => onChange(e)} type={type} {...rest} />
            {error && <label className="text-danger">{error}</label>}
          </FormGroup>
        </Col>
      </Row>
    </>
  );
};

export default ImsInputText;
