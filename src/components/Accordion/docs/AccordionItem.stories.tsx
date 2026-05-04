import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import AccordionItem from "../AccordionItemBase";
export default {
  title: "components/AccordionItem",
  component: AccordionItem,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof AccordionItem>;

// Define the type for the story
const Template: StoryFn<typeof AccordionItem> = (args: any) => (
  <AccordionItem {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as AccordionItem };
