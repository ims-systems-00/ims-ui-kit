import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import ImsInputRadioBase from "../ImsInputRadio";

const ImsInputRadio = ({}) => {
  const [radio, setRadio] = useState("Option 2");
  return (
    <div>
      <h2>Radio Input</h2>

      <Row>
        <Col>
          <ImsInputRadioBase
            label="Likelihood"
            name="radio1"
            values={[1, 2, 3, 4, 5]}
            onChange={(e) => {
              setRadio(e.currentTarget.value);
            }}
            defaultChecked={radio}
          />
        </Col>
        <Col>
          <ImsInputRadioBase
            label="Consequence"
            name="radio2"
            values={[1, 2, 3, 4, 5]}
            onChange={(e) => {
              setRadio(e.currentTarget.value);
            }}
            defaultChecked={radio}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ImsInputRadio;
