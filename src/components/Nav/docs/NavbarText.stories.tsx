import { Meta, StoryFn } from "@storybook/react/*";
import NavbarText from "../NavbarTextBase";
import React from "react";
export default {
  title: "components/NavbarText",
  component: NavbarText,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof NavbarText>;

// Define the type for the story
const Template: StoryFn<typeof NavbarText> = (args: any) => (
  <NavbarText {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as NavbarText };
