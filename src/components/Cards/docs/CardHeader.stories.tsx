import { StoryFn } from "@storybook/react/*";
import CardHeader from "../CardHeaderBase";
import React from "react";

export default {
  title: "components/CardHeader",
  component: CardHeader,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};

// Define the type for the story
const Template: StoryFn<typeof CardHeader> = (args: any) => (
  <CardHeader {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as CardHeader };
