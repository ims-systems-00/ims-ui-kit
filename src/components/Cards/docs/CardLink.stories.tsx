import { Meta, StoryFn } from "@storybook/react/*";
import CardLink from "../CardLinkBase";
import React from "react";

export default {
  title: "components/CardLink",
  component: CardLink,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof CardLink>;

// Define the type for the story
const Template: StoryFn<typeof CardLink> = (args: any) => (
  <CardLink {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as CardLink };
