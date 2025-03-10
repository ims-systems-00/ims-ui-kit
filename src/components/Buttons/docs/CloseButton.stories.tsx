import { Meta, StoryFn } from "@storybook/react/*";
import CloseButton from "../CloseButtonBase";
import React from "react";
export default {
  title: "components/CloseButton",
  component: CloseButton,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof CloseButton>;

// Define the type for the story
const Template: StoryFn<typeof CloseButton> = (args: any) => (
  <CloseButton {...args} />
);

Template.args = {};

export { Template as CloseButton };
