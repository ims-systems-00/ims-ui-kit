import { Meta, StoryFn } from "@storybook/react/*";
import PopoverBody from "../PopoverBodyBase";
import React from "react";
export default {
  title: "components/PopoverBody",
  component: PopoverBody,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap PopoverBody](https://getbootstrap.com/docs/5.3/components/alerts/)
All our PopoverBody are customized from the default bootstrap alerts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof PopoverBody>;

// Define the type for the story
const Template: StoryFn<typeof PopoverBody> = (args: any) => (
  <PopoverBody {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as PopoverBody };
