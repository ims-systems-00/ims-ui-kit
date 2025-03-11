import { Meta, StoryFn } from "@storybook/react/*";
import NavbarBrand from "../NavbarBrandBase";
import React from "react";

export default {
  title: "components/NavbarBrand",
  component: NavbarBrand,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof NavbarBrand>;

// Define the type for the story
const Template: StoryFn<typeof NavbarBrand> = (args: any) => (
  <NavbarBrand {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as NavbarBrand };
