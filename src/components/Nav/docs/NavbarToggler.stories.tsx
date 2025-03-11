import { Meta, StoryFn } from "@storybook/react/*";
import NavbarToggler from "../NavbarTogglerBase";
import React from "react";

export default {
  title: "components/NavbarToggler",
  component: NavbarToggler,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof NavbarToggler>;

// Define the type for the story
const Template: StoryFn<typeof NavbarToggler> = (args: any) => (
  <NavbarToggler {...args} />
);

Template.args = {
  children: "Toggler text here",
};

export { Template as NavbarToggler };
