import PopoverHeader from "../PopoverHeaderBase"
export default {
  title: "components/PopoverHeader",
  component: PopoverHeader,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = PopoverHeader;

Default.args = {
  children: "Click Here",
};
