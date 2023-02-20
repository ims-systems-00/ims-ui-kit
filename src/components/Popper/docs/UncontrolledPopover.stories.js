import UncontrolledPopover from "../UncontrolledPopoverBase"
export default {
  title: "components/UncontrolledPopover",
  component: UncontrolledPopover,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = UncontrolledPopover;

Default.args = {
  children: "Click Here",
};
