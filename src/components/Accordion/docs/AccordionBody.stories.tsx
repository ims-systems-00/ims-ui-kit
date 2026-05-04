import type { Meta, StoryFn } from "@storybook/react";
import AccordionBody from "../AccordionBodyBase";
import React from "react";

export default {
  title: "components/AccordionBody",
  component: AccordionBody,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof AccordionBody>;

// Define the type for the story
const Template: StoryFn<typeof AccordionBody> = (args: any) => (
  <AccordionBody {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as AccordionBody };
