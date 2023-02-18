import ButtonGroup from "../ButtonGroupBase"
export default {
  title: "components/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = ButtonGroup;

Default.args = {
  children: "Click Here",
};
