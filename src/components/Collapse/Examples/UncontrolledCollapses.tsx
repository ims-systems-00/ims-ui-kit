import { Card, CardBody } from "reactstrap";
import Button from "../../Buttons/ButtonBase";
import UncontrolledCollapse from "../UncontrolledCollapseBase";
import React from "react";

const UncontrolledCollapses = ({}) => {
  return (
    <>
      <Button color="primary" id="toggler" style={{ marginBottom: "1rem" }}>
        Toggle
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        <Card>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            magni, voluptas debitis similique porro a molestias consequuntur
            earum odio officiis natus, amet hic, iste sed dignissimos esse fuga!
            Minus, alias.
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </>
  );
};

export default UncontrolledCollapses;
