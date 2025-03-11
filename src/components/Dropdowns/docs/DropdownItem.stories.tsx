import { Meta, StoryFn } from "@storybook/react/*";
import DropdownItem from "../DropdownItemBase";
import React from "react";

export default {
  title: "components/DropdownItem",
  component: DropdownItem,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof DropdownItem>;

// Define the type for the story
const Template: StoryFn<typeof DropdownItem> = (args: any) => (
  <DropdownItem {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as Alert };
