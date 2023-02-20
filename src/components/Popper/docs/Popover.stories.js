import Popover from "../PopoverBase"
export default {
  title: "components/Popover",
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = Popover;

Default.args = {
  children: "Click Here",
};
