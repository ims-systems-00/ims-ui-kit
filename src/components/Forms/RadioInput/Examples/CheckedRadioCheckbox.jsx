import React from "react";
import { Form } from "reactstrap";
import ImsRadioCheckbox from "../ImsInputRadio";

const CheckedRadioCheckbox = ({}) => {
  return (
    <>
      <Form>
        <legend>Checked Radio</legend>
        <ImsRadioCheckbox name="radio1" label="Default Radio" />
        <ImsRadioCheckbox name="radio1" defaultChecked label="Default Radio 2" />
        <legend>Unselected Radio</legend>
        <ImsRadioCheckbox name="radio2" unselected label="Unselected Radio 3" />
        <ImsRadioCheckbox
          name="radio2"
          unselected
          defaultChecked
          label="Unselected Radio 4"
        />
      </Form>
    </>
  );
};

export default CheckedRadioCheckbox;
