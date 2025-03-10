import { Meta, StoryFn } from "@storybook/react/*";
import CardSubtitle from "../CardSubtitleBase";
import React from "react";

export default {
  title: "components/CardSubtitle",
  component: CardSubtitle,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof CardSubtitle>;

// Define the type for the story
const Template: StoryFn<typeof CardSubtitle> = (args: any) => (
  <CardSubtitle {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as CardSubtitle };
