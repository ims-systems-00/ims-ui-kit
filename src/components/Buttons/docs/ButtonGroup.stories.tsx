import { Meta, StoryFn } from "@storybook/react/*";
import ButtonGroup from "../ButtonGroupBase";
import React from "react";
export default {
  title: "components/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof ButtonGroup>;

// Define the type for the story
const Template: StoryFn<typeof ButtonGroup> = (args: any) => (
  <ButtonGroup {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as ButtonGroup };
