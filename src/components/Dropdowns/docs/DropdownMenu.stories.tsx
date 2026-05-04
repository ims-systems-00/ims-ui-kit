import { Meta, StoryFn } from "@storybook/react/*";
import DropdownMenu from "../DropdownMenuBase";
import React from "react";

export default {
  title: "components/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof DropdownMenu>;

// Define the type for the story
const Template: StoryFn<typeof DropdownMenu> = (args: any) => (
  <DropdownMenu {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as Alert };
