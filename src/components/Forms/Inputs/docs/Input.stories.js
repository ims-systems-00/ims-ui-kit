import Input from "../InputBase"
export default {
  title: "components/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = Input;

Default.args = {
  children: "Click Here",
};
