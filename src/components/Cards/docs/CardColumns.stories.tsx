import { Meta, StoryFn } from "@storybook/react/*";
import CardColumns from "../CardColumnsBase";
import React from "react";

export default {
  title: "components/CardColumns",
  component: CardColumns,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof CardColumns>;

// Define the type for the story
const Template: StoryFn<typeof CardColumns> = (args: any) => (
  <CardColumns {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as CardColumns };
