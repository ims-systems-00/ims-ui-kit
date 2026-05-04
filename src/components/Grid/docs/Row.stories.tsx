import { Meta, StoryFn } from "@storybook/react/*";
import Row from "../RowBase";
import React from "react";

export default {
  title: "components/Row",
  component: Row,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof Row>;

// Define the type for the story
const Template: StoryFn<typeof Row> = (args: any) => <Row {...args} />;

Template.args = {
  children: "Click Here",
};

export { Template as Row };
