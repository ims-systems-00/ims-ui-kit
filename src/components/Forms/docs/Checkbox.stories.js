import ImsCheckBox from "../ImsFormElements/ImsInputCheck";

export default {
  title: "components/Forms/Checkbox",
  component: ImsCheckBox,
};
const Template = (args) => <ImsCheckBox {...args} />;
export const CheckboxInput = Template;

CheckboxInput.args = {
  label: "Label Text",
  value: "",
};
export { default as ControlledCheckbox } from "../CheckboxInput/Examples/ControlledCheckbox";
export { default as DefaultCheckbox } from "../CheckboxInput/Examples/DefaultCheckbox";
export { default as UnselectedCheckbox } from "../CheckboxInput/Examples/UnselectedCheckbox";

