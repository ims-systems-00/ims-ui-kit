import { Meta, StoryFn } from "@storybook/react/*";
import Table from "../TableBase";
import React from "react";

export default {
  title: "components/Table",
  component: Table,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Table](https://getbootstrap.com/docs/5.3/components/alerts/)
All our Table are customized from the default bootstrap alerts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof Table>;

// Define the type for the story
const Template: StoryFn<typeof Table> = (args: any) => <Table {...args} />;

Template.args = {
  children: "Click Here",
};

export { Template as Table };
