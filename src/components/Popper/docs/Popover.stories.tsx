import { Meta, StoryFn } from "@storybook/react/*";
import Popover from "../PopoverBase";
export default {
  title: "components/Popover",
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Alert](https://getbootstrap.com/docs/5.3/components/alerts/)
All our alerts are customized from the default bootstrap alerts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof Popover>;

// Define the type for the story
const Template: StoryFn<typeof Alert> = (args: any) => <Alert {...args} />;

Template.args = {};

export { Template as Alert };

Default.args = {
  children: "Click Here",
};
