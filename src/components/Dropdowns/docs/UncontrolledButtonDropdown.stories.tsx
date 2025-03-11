import { Meta, StoryFn } from "@storybook/react/*";
import UncontrolledButtonDropdown from "../UncontrolledButtonDropdownBase";
import React from "react";

export default {
  title: "components/UncontrolledButtonDropdown",
  component: UncontrolledButtonDropdown,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof UncontrolledButtonDropdown>;

// Define the type for the story
const Template: StoryFn<typeof UncontrolledButtonDropdown> = (args: any) => (
  <UncontrolledButtonDropdown {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as UncontrolledButtonDropdown };
