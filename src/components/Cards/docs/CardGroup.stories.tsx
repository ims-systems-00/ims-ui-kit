import { Meta, StoryFn } from "@storybook/react/*";
import CardGroup from "../CardBase";
import React from "react";

export default {
  title: "components/CardGroup",
  component: CardGroup,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof CardGroup>;

// Define the type for the story
const Template: StoryFn<typeof CardGroup> = (args: any) => (
  <CardGroup {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as CardGroup };
