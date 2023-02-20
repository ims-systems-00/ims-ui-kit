import Placeholder from "../PlaceholderBase"
export default {
  title: "components/Placeholder",
  component: Placeholder,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = Placeholder;

Default.args = {
  children: "Click Here",
};
