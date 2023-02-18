import React from "react";
import ImsInputCheck from "../../ImsFormElements/ImsInputCheck";

const ControlledCheckbox = ({}) => {
  const [checked, setChecked] = React.useState(true);
  const handleCheckedChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <>
      <ImsInputCheck
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
