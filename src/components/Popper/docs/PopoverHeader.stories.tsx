import { Meta, StoryFn } from "@storybook/react/*";
import PopoverHeader from "../PopoverHeaderBase";
import React from "react";
export default {
  title: "components/PopoverHeader",
  component: PopoverHeader,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap PopoverHeader](https://getbootstrap.com/docs/5.3/components/alerts/)
All our PopoverHeader are customized from the default bootstrap alerts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof PopoverHeader>;

// Define the type for the story
const Template: StoryFn<typeof PopoverHeader> = (args: any) => (
  <PopoverHeader {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as PopoverHeader };
