import React from "react";
import { Form } from "reactstrap";
import ImsRadioCheckbox from "../ImsInputRadio";

const UnselectedRadioCheckbox = ({}) => {
  return (
    <>
      <Form>
        <ImsRadioCheckbox name="radio1" unselected label="Unselected Radio" />
        <ImsRadioCheckbox name="radio1" unselected label="Unselected Radio 2" />
        <ImsRadioCheckbox name="radio1" unselected label="Unselected Radio 3" />
      </Form>
    </>
  );
};

export default UnselectedRadioCheckbox;
