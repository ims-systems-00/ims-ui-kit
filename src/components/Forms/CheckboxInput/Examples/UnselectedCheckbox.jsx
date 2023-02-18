import ImsCheckBox from "../../ImsFormElements/ImsInputCheck";

const UnselectedCheckbox = ({}) => {
  return (
    <>
      <ImsCheckBox unselected mandatory label="Unselected unchecked" />
      <ImsCheckBox unselected defaultChecked label="Unselected checked" />
    </>
  );
};

export default UnselectedCheckbox;
