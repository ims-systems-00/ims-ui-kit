import ImsCheckBox from "../../ImsFormElements/ImsInputCheck";

const DefaultCheckbox = ({}) => {
  return (
    <>
      <ImsCheckBox label="Default checked" />
      <ImsCheckBox defaultChecked label="Default Checked" />
    </>
  );
};

export default DefaultCheckbox;
