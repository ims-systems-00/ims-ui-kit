import { Meta, StoryFn } from "@storybook/react/*";
import Nav from "../Examples/TabsPanelExample";
import React from "react";

export default {
  title: "components/Nav",
  component: Nav,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof Nav>;

// Define the type for the story
const Template: StoryFn<typeof Nav> = (args: any) => <Nav {...args} />;

Template.args = {
  children: "Click Here",
};

export { Template as Nav };

export { default as TabVariant } from "../Examples/TabsVariants";
