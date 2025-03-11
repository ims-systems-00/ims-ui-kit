import { Meta, StoryFn } from "@storybook/react/*";
import NavLink from "../NavLinkBase";
import React from "react";

export default {
  title: "components/NavLink",
  component: NavLink,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof NavLink>;

// Define the type for the story
const Template: StoryFn<typeof NavLink> = (args: any) => <NavLink {...args} />;

Template.args = {
  children: "Click Here",
};

export { Template as NavLink };
