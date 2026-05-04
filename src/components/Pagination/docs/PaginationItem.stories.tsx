import { Meta, StoryFn } from "@storybook/react/*";
import PaginationItem from "../PaginationItemBase";
import React from "react";

export default {
  title: "components/PaginationItem",
  component: PaginationItem,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof PaginationItem>;

// Define the type for the story
const Template: StoryFn<typeof PaginationItem> = (args: any) => (
  <PaginationItem {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as PaginationItem };
