import { Meta, StoryFn } from "@storybook/react/*";
import DefaultPagination from "../Examples/DefaultPagination";
import React from "react";

export default {
  title: "components/Pagination",
  component: DefaultPagination,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Pagination](https://getbootstrap.com/docs/5.3/utilities/text/)
All our Pagination are customized from the default bootstrap texts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof DefaultPagination>;

// Define the type for the story
const Template: StoryFn<typeof DefaultPagination> = (args: any) => (
  <DefaultPagination {...args} />
);

Template.args = {};

export { Template as Pagination };

export { default as PaginationWithIcon } from "../Examples/PaginationWithIcon";
