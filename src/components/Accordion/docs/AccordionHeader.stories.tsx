import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import AccordionHeader from "../AccordionHeaderBase";
export default {
  title: "components/AccordionHeader",
  component: AccordionHeader,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof AccordionHeader>;

// Define the type for the story
const Template: StoryFn<typeof AccordionHeader> = (args: any) => (
  <AccordionHeader {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as AccordionHeader };
