import { Meta, StoryFn } from "@storybook/react/*";
import PlaceholderButton from "../PlaceholderButtonBase";
import React from "react";

export default {
  title: "components/PlaceholderButton",
  component: PlaceholderButton,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof PlaceholderButton>;

// Define the type for the story
const Template: StoryFn<typeof PlaceholderButton> = (args: any) => (
  <PlaceholderButton {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as PlaceholderButton };
