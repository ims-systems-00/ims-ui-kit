import FileDropZone from "../FileDropZone/FileDropZone";
export default {
  title: "components/Forms",
  component: FileDropZone,
};
const Template = (args) => <FileDropZone {...args} />;
export const DropZone = Template;
DropZone.args = {};

export { default as RegularTextInput } from "../TextInput/Examples/SimpleInputText";
export { default as TextInputWithIcon } from "../TextInput/Examples/TextInputWithIcon";
export { default as ValidTextInput } from "../TextInput/Examples/ValidTextInput";
export { default as InvalidTextInput } from "../TextInput/Examples/InvalidTextInput";
