import ImsInputRadio from "../RadioInput/ImsInputRadio";

export default {
  title: "components/Forms/Radio",
  component: ImsInputRadio,
};
const Template = (args) => <ImsInputRadio {...args} />;
export const RadioInput = Template;

RadioInput.args = {
  label: "Label Text",
};

export { default as CheckedRadioCheckbox } from "../RadioInput/Examples/CheckedRadioCheckbox";
export { default as DefaultRadio } from "../RadioInput/Examples/DefaultRadioCheckbox";
export { default as UnselectedRadio } from "../RadioInput/Examples/UnselectedRadioCheckbox";
