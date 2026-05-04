import { Meta, StoryFn } from "@storybook/react/*";
import TabsExample from "../Example/TabsExample";
import React from "react";

export default {
  title: "components/Panel",
  component: TabsExample,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof TabsExample>;

// Define the type for the story
const Template: StoryFn<typeof TabsExample> = (args: any) => (
  <TabsExample {...args} />
);

Template.args = {};

export { Template as TabsExample };
