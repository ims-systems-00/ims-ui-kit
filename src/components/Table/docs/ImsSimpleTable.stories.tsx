import { Meta, StoryFn } from "@storybook/react/*";
import ImsSimpleTable from "../ImsSimpleTable";
import { data } from "../data";
import React from "react";
export default {
  title: "components/Table",
  component: ImsSimpleTable,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap ImsSimpleTable](https://getbootstrap.com/docs/5.3/components/alerts/)
All our ImsSimpleTable are customized from the default bootstrap alerts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof ImsSimpleTable>;

// Define the type for the story
const Template: StoryFn<typeof ImsSimpleTable> = (args: any) => (
  <ImsSimpleTable {...args} />
);

Template.args = {
  thead: data.thead,
  tbody: data.tbody,
};

export { Template as ImsSimpleTable };

export { default as TableInaCard } from "../TableInaCard";
