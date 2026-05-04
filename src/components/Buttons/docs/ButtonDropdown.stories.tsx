import { Meta, StoryFn } from "@storybook/react/*";
import ButtonDropdown from "../ButtonDropdownBase";
import React from "react";
export default {
  title: "components/ButtonDropdown",
  component: ButtonDropdown,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof ButtonDropdown>;
// Define the type for the story
const Template: StoryFn<typeof ButtonDropdown> = (args: any) => (
  <ButtonDropdown {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as ButtonDropdown };