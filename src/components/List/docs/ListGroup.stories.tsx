import { Meta, StoryFn } from "@storybook/react/*";
import ListGroup from "../ListGroupBase";
import React from "react";

export default {
  title: "components/ListGroup",
  component: ListGroup,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof ListGroup>;

// Define the type for the story
const Template: StoryFn<typeof ListGroup> = (args: any) => (
  <ListGroup {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as ListGroup };
