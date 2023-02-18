import ImsInputCheck from "../../ImsFormElements/ImsInputCheck";

const DefaultCheckbox = ({}) => {
  return (
    <>
      <ImsInputCheck label="Default checked" />
      <ImsInputCheck defaultChecked label="Default Checked" />
    </>
  );
};

export default DefaultCheckbox;
