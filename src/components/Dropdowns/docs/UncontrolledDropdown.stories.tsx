import { Meta, StoryFn } from "@storybook/react/*";
import UncontrolledDropdown from "../UncontrolledDropdownBase";
import React from "react";
export default {
  title: "components/UncontrolledDropdown",
  component: UncontrolledDropdown,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof UncontrolledDropdown>;

// Define the type for the story
const Template: StoryFn<typeof UncontrolledDropdown> = (args: any) => (
  <UncontrolledDropdown {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as UncontrolledDropdown };
