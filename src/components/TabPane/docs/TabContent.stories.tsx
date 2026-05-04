import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import TabContent from "../TabContentBase";
export default {
  title: "components/TabContent",
  component: TabContent,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof TabContent>;

// Define the type for the story
const Template: StoryFn<typeof TabContent> = (args: any) => (
  <TabContent {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as TabContent };
