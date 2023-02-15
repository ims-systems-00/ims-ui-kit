import ButtonToggle from "../ButtonToggleBase"
export default {
  title: "components/ButtonToggle",
  component: ButtonToggle,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = ButtonToggle;

Default.args = {
  children: "Click Here",
};
