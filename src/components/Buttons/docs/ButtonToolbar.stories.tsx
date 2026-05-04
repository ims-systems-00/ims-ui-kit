import { Meta, StoryFn } from "@storybook/react/*";
import ButtonToolbar from "../ButtonToolbarBase";
import React from "react";
export default {
  title: "components/ButtonToolbar",
  component: ButtonToolbar,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof ButtonToolbar>;

// Define the type for the story
const Template: StoryFn<typeof ButtonToolbar> = (args: any) => (
  <ButtonToolbar {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as ButtonToolbar };
