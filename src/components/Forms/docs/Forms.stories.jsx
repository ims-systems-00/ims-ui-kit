import FileDropZone from "../FileDropZone/FileDropZone";
export default {
  title: "components/Forms",
  component: FileDropZone,
};
const Template = (args) => <FileDropZone {...args} />;
export const DropZone = Template;
DropZone.args = {};
export { default as Hint } from "../FileDropZone/Example";
