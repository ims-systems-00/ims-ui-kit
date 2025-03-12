import { Meta, StoryFn } from "@storybook/react/*";
import Popover from "../Examples/PopoverExample";
import React from "react";
export default {
  title: "components/Popover",
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Popover](https://getbootstrap.com/docs/5.3/components/alerts/)
All our Popover are customized from the default bootstrap alerts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof Popover>;

// Define the type for the story
const Template: StoryFn<typeof Popover> = (args: any) => <Popover {...args} />;

Template.args = {
  children: "Click Here",
};

export { Template as Popover };
