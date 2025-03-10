import type { Meta, StoryFn } from "@storybook/react";
import Accordion from "../Examples/DefaultAccordion";
import React from "react";
export default {
  title: "components/Accordion",
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Accordion](https://getbootstrap.com/docs/5.3/components/accordion/)
All our accordions are customized from the default bootstrap accordions. Only the customized portions are listed here.
`,
      },
    },
  },
} as Meta<typeof Accordion>;

const Template: StoryFn<typeof Accordion> = (args: any) => <Accordion {...args} />;

Template.args = {};


export { Template as Accordion };
export { default as UncontrolledAccordion } from "../Examples/DefaultUncontrolledAccordion";
