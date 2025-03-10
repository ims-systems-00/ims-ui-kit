import React from "react";
import RadialProgressBar from "../Radial/RadialProgressBar";
import { Col, Row } from "reactstrap";

const RadialProgressExample = () => {
  return (
    <React.Fragment>
      <Row>
        <Col md="3">
          <RadialProgressBar
            percentage={25}
            options={{
              pathColor: "green",
            }}
          />
        </Col>
        <Col md="3">
          <RadialProgressBar
            percentage={40}
            options={{
              pathColor: "red",
            }}
          />
        </Col>
        <Col md="3">
          <RadialProgressBar
            percentage={65}
            options={{
              pathColor: "yellow",
            }}
          />
        </Col>
        <Col md="3">
          <RadialProgressBar
            percentage={30}
            options={{
              pathColor: "blue",
            }}
          />
        </Col>
        <Col md="3">
          <RadialProgressBar
            percentage={75}
            options={{
              pathColor: "purple",
            }}
          />
        </Col>
        <Col md="3">
          <RadialProgressBar
            percentage={25}
            options={{
              pathColor: "orange",
            }}
          />
        </Col>
        <Col md="3">
          <RadialProgressBar
            percentage={95}
            options={{
              pathColor: "pink",
            }}
          />
        </Col>
        <Col md="3">
          <RadialProgressBar
            percentage={99}
            options={{
              pathColor: "brown",
            }}
          />
        </Col>
        <Col md="3">
          <RadialProgressBar
            percentage={98}
            options={{
              pathColor: "indigo",
            }}
          />
        </Col>
        <Col md="3">
          <RadialProgressBar
            percentage={100}
            options={{
              pathColor: "jade",
            }}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default RadialProgressExample;
