import type { Meta, StoryFn } from "@storybook/react";
import DefaultBreadcrumb from "../Examples/DefaultBreadcrumb";
import React from "react";

export default {
  title: "components/Breadcrumb",
  component: DefaultBreadcrumb,
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
} as Meta<typeof DefaultBreadcrumb>;

// Define the type for the story
const Template: StoryFn<typeof DefaultBreadcrumb> = (args: any) => (
  <DefaultBreadcrumb {...args} />
);

Template.args = {};

export { Template as Breadcrumb };
