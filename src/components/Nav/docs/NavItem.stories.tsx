import { Meta, StoryFn } from "@storybook/react/*";
import NavItem from "../NavItemBase";
import React from "react";

export default {
  title: "components/NavItem",
  component: NavItem,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof NavItem>;

// Define the type for the story
const Template: StoryFn<typeof NavItem> = (args: any) => <NavItem {...args} />;

Template.args = {
  children: "Click Here",
};

export { Template as NavItem };
