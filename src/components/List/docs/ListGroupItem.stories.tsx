import { Meta, StoryFn } from "@storybook/react/*";
import ListGroupItem from "../ListGroupItemBase";
import React from "react";

export default {
  title: "components/ListGroupItem",
  component: ListGroupItem,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof ListGroupItem>;

// Define the type for the story
const Template: StoryFn<typeof ListGroupItem> = (args: any) => (
  <ListGroupItem {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as ListGroupItem };
