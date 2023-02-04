import React from "react";
import { Form} from "reactstrap";
import ImsRadioCheckbox from "../ImsInputRadio";

const DefaultRadioCheckbox = ({}) => {
  return (
    <>
      <Form>
        <ImsRadioCheckbox name="radio1" label="Default Radio" />
        <ImsRadioCheckbox name="radio1" label="Default Radio 2" />
        <ImsRadioCheckbox name="radio1" label="Default Radio 3" />
      </Form>
    </>
  );
};

export default DefaultRadioCheckbox;
