import { Meta, StoryFn } from "@storybook/react/*";
import DefaultList from "../Examples/DefaultList";
import React from "react";

export default {
  title: "components/Lists",
  component: DefaultList,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Dropdown](https://getbootstrap.com/docs/5.3/components/dropdowns/#overview)
All our dropdowns are customized from the default bootstrap dropdowns. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof DefaultList>;

// Define the type for the story
const Template: StoryFn<typeof DefaultList> = (args: any) => (
  <DefaultList {...args} />
);

Template.args = {};

export { Template as List };

export { default as ListGroup } from "../Examples/ListGroup";
export { default as InlineList } from "../Examples/InlineList";
