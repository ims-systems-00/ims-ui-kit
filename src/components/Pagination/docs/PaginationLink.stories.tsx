import { Meta, StoryFn } from "@storybook/react/*";
import PaginationLink from "../PaginationLinkBase";
import React from "react";
export default {
  title: "components/PaginationLink",
  component: PaginationLink,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof PaginationLink>;

// Define the type for the story
const Template: StoryFn<typeof PaginationLink> = (args: any) => (
  <PaginationLink {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as PaginationLink };
