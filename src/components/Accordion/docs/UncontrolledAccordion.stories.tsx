import type { Meta, StoryFn } from "@storybook/react";
import UncontrolledAccordion from "../UncontrolledAccordionBase";
import React from "react";
export default {
  title: "components/UncontrolledAccordion",
  component: UncontrolledAccordion,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof UncontrolledAccordion>;

// Define the type for the story
const Template: StoryFn<typeof UncontrolledAccordion> = (args: any) => (
  <UncontrolledAccordion {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as UncontrolledAccordion };
