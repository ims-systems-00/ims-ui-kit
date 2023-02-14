import React from "react";
import ImsCheckBox from "../ImsInputCheck";

const ControlledCheckbox = ({}) => {
  const [checked, setChecked] = React.useState(true);
  const handleCheckedChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <>
      <ImsCheckBox
        unselected
        mandatory
        label="Controlled Settings"
        onClick={handleCheckedChange}
        defaultChecked={checked}
      />
    </>
  );
};

export default ControlledCheckbox;
