import { Meta, StoryFn } from "@storybook/react/*";
import BreadcrumbItem from "../BreadcrumbItemBase";
import React from "react";

export default {
  title: "components/BreadcrumbItem",
  component: BreadcrumbItem,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Dropdown](https://getbootstrap.com/docs/5.3/components/dropdowns/#overview)
All our dropdowns are customised from the default bootstrap dropdowns. Only the customised portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof BreadcrumbItem>;

// Define the type for the story
const Template: StoryFn<typeof BreadcrumbItem> = (args: any) => (
  <BreadcrumbItem {...args} />
);

Template.args = {};

export { Template as BreadcrumbItem };
