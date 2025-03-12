import { Meta, StoryFn } from "@storybook/react/*";
import InputGroupText from "../InputGroupTextBase";
import React from "react";

export default {
  title: "components/InputGroupText",
  component: InputGroupText,
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
} as Meta<typeof InputGroupText>;

// Define the type for the story
const Template: StoryFn<typeof InputGroupText> = (args: any) => (
  <InputGroupText {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as InputGroupText };
