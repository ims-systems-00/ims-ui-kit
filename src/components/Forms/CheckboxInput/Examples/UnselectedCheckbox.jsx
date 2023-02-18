import ImsInputCheck from "../../ImsFormElements/ImsInputCheck";

const UnselectedCheckbox = ({}) => {
  return (
    <>
      <ImsInputCheck unselected mandatory label="Unselected unchecked" />
      <ImsInputCheck unselected defaultChecked label="Unselected checked" />
    </>
  );
};

export default UnselectedCheckbox;
