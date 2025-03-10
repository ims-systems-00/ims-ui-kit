import { Meta, StoryFn } from "@storybook/react/*";
import Card from "../CardBase";
import React from "react";
export default {
  title: "components/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof Card>;

// Define the type for the story
const Template: StoryFn<typeof Card> = (args: any) => <Card {...args} />;

Template.args = {
  children: "Click Here",
};

export { Template as Card };

export { default as DashboardCards } from "../Examples/DashboardCards";
