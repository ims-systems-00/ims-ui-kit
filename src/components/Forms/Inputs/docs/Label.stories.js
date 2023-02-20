import Label from "../LabelBase"
export default {
  title: "components/Label",
  component: Label,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = Label;

Default.args = {
  children: "Click Here",
};
