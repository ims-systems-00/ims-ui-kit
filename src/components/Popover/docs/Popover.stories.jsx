import DefaultPopover from "../Examples/DefaultPopover";

export default {
  title: "components/Popover",
  component: DefaultPopover,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Popover](https://getbootstrap.com/docs/5.3/components/popovers/#overview)
All our popovers are customised from the default bootstrap popovers. Only the customised portions are listed here.
                `,
      },
    },
  },
};

export const Popover = (args) => <DefaultPopover {...args} />;
Popover.args = {};

export { default as DefaultPopover } from "../Examples/DefaultPopover";
