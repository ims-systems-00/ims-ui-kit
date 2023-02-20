import PlaceholderButton from "../PlaceholderButtonBase"
export default {
  title: "components/PlaceholderButton",
  component: PlaceholderButton,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = PlaceholderButton;

Default.args = {
  children: "Click Here",
};
