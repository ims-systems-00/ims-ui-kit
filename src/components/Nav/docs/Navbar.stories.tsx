import { Meta, StoryFn } from "@storybook/react/*";
import Navbar from "../NavbarBase";
import React from "react";

export default {
  title: "components/Navbar",
  component: Navbar,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof Navbar>;

// Define the type for the story
const Template: StoryFn<typeof Navbar> = (args: any) => <Navbar {...args} />;

Template.args = {
  children: "Click Here",
};

export { Template as Navbar };
