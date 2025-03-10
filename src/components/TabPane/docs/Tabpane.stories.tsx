import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import DefaultTabpane from "../Examples/DefaultTabpane";

export default {
  title: "components/TabPane",
  component: DefaultTabpane,
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
} as Meta<typeof DefaultTabpane>;

// Define the type for the story
const Template: StoryFn<typeof DefaultTabpane> = (args: any) => (
  <DefaultTabpane {...args} />
);

Template.args = {};

export { Template as Tabpane };
