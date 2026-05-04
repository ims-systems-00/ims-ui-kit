import { Meta, StoryFn } from "@storybook/react/*";
import CardBody from "../CardBodyBase";
import React from "react";

export default {
  title: "components/CardBody",
  component: CardBody,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof CardBody>;

// Define the type for the story
const Template: StoryFn<typeof CardBody> = (args: any) => (
  <CardBody {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as CardBody };
