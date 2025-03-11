import { Meta, StoryFn } from "@storybook/react/*";
import Collapse from "../CollapseBase";
import React from "react";

export default {
  title: "components/Collapse",
  component: Collapse,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof Collapse>;

// Define the type for the story
const Template: StoryFn<typeof Collapse> = (args: any) => (
  <Collapse {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as Collapse };
