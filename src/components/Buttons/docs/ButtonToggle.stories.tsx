import { Meta, StoryFn } from "@storybook/react/*";
import ButtonToggle from "../ButtonToggleBase";
import React from "react";
export default {
  title: "components/ButtonToggle",
  component: ButtonToggle,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof ButtonToggle>;

// Define the type for the story
const Template: StoryFn<typeof ButtonToggle> = (args: any) => (
  <ButtonToggle {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as ButtonToggle };
