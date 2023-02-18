import { Input } from "reactstrap";
import ImsInputTextDemo from "../ImsFormElements/Examples/ImsInputTextDemo";

export default {
  title: "components/Forms/ImsFormElements",
  component: ImsInputTextDemo,
};
const Template = (args) => <ImsInputTextDemo {...args} />;
export const ImsInputText = Template;

ImsInputText.args = {};

export { default as ImsInputTextWithIcon } from "../ImsFormElements/Examples/ImsInputTextWithIcon";
export { default as ImsInputSelect } from "../ImsFormElements/Examples/ImsInputSelect";
export { default as ImsInputSelectWithIcon } from "../ImsFormElements/Examples/ImsInputSelectWithIcon";
export { default as ImsInputTime } from "../ImsFormElements/Examples/ImsInputTime";
export { default as ImsInputDate } from "../ImsFormElements/Examples/ImsInputDate";
export { default as ImsDropZone } from "../ImsFormElements/Examples/ImsInputFileDropzone";
export { default as ImsInputRadio } from "../ImsFormElements/Examples/ImsInputRadio";
export { default as ImsInputCheckbox } from "../ImsFormElements/Examples/ImsInputCheck";
export { default as ImsTextEditor } from "../ImsFormElements/Examples/ImsTextEditor";
