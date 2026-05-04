import { Meta, StoryFn } from "@storybook/react/*";
import Placeholder from "../Examples/Plachholder";
import React from "react";

export default {
  title: "components/Placeholder",
  component: Placeholder,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof Placeholder>;

// Define the type for the story
const Template: StoryFn<typeof Placeholder> = (args: any) => (
  <Placeholder {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as Placeholder };
