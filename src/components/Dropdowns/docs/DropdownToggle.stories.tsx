import { Meta, StoryFn } from "@storybook/react/*";
import DropdownToggle from "../DropdownToggleBase";
import React from "react";

export default {
  title: "components/DropdownToggle",
  component: DropdownToggle,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof DropdownToggle>;

// Define the type for the story
const Template: StoryFn<typeof DropdownToggle> = (args: any) => (
  <DropdownToggle {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as DropdownToggle };
