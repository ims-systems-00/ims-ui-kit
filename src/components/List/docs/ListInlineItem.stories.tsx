import { Meta, StoryFn } from "@storybook/react/*";
import LisInlineItem from "../ListInlineItemBase";
import React from "react";

export default {
  title: "components/LisInlineItem",
  component: LisInlineItem,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof LisInlineItem>;

// Define the type for the story
const Template: StoryFn<typeof LisInlineItem> = (args: any) => (
  <LisInlineItem {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as LisInlineItem };
