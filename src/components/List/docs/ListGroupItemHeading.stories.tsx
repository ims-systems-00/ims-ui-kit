import { Meta, StoryFn } from "@storybook/react/*";
import ListGroupItemHeading from "../ListGroupItemHeadingBase";
import React from "react";

export default {
  title: "components/ListGroupItemHeading",
  component: ListGroupItemHeading,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof ListGroupItemHeading>;

// Define the type for the story
const Template: StoryFn<typeof ListGroupItemHeading> = (args: any) => (
  <ListGroupItemHeading {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as ListGroupItemHeading };
