import ImsInputCheck from "../ImsFormElements/ImsInputCheck";

export default {
  title: "components/Forms/Checkbox",
  component: ImsInputCheck,
};
const Template = (args) => <ImsInputCheck {...args} />;
export const CheckboxInput = Template;

CheckboxInput.args = {
  label: "Label Text",
  value: "",
};
export { default as ControlledCheckbox } from "../CheckboxInput/Examples/ControlledCheckbox";
export { default as DefaultCheckbox } from "../CheckboxInput/Examples/DefaultCheckbox";
export { default as UnselectedCheckbox } from "../CheckboxInput/Examples/UnselectedCheckbox";

