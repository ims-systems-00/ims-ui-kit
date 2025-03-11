import { Meta, StoryFn } from "@storybook/react/*";
import Col from "../ColBase";
import React from "react";

export default {
  title: "components/Col",
  component: Col,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof Col>;

// Define the type for the story
const Template: StoryFn<typeof Col> = (args: any) => <Col {...args} />;

Template.args = {
  children: "Click Here",
};

export { Template as Col };
