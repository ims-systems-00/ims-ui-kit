import { Meta, StoryFn } from "@storybook/react/*";
import CardText from "../CardTextBase";
import React from "react";

export default {
  title: "components/CardText",
  component: CardText,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof CardText>;

// Define the type for the story
const Template: StoryFn<typeof CardText> = (args: any) => (
  <CardText {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as CardText };
