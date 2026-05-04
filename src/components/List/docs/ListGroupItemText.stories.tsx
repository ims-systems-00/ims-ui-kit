import { Meta, StoryFn } from "@storybook/react/*";
import ListGroupItemText from "../ListGroupItemTextBase";
import React from "react";

export default {
  title: "components/ListGroupItemText",
  component: ListGroupItemText,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof ListGroupItemText>;

// Define the type for the story
const Template: StoryFn<typeof ListGroupItemText> = (args: any) => (
  <ListGroupItemText {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as ListGroupItemText };
