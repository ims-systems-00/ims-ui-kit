import { Meta, StoryFn } from "@storybook/react/*";
import CardTitle from "../CardTitleBase";
import React from "react";

export default {
  title: "components/CardTitle",
  component: CardTitle,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof CardTitle>;

// Define the type for the story
const Template: StoryFn<typeof CardTitle> = (args: any) => (
  <CardTitle {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as CardTitle };
