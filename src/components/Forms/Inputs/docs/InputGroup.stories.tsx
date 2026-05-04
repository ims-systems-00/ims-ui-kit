import { Meta, StoryFn } from "@storybook/react/*";
import InputGroup from "../InputGroupBase";
import React from "react";
export default {
  title: "components/InputGroup",
  component: InputGroup,
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
} as Meta<typeof InputGroup>;

// Define the type for the story
const Template: StoryFn<typeof InputGroup> = (args: any) => <InputGroup {...args} />;

Template.args = {};

export { Template as InputGroup };
