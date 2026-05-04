import { Meta, StoryFn } from "@storybook/react/*";
import Input from "../InputBase";
import React from "react";
export default {
  title: "components/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Input](https://getbootstrap.com/docs/5.3/components/alerts/)
All our Input are customized from the default bootstrap alerts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof Input>;

// Define the type for the story
const Template: StoryFn<typeof Input> = (args: any) => <Input {...args} />;

Template.args = {
  children: "Click Here",
};

export { Template as Input };
